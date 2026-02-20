import React, { useState, useEffect, useRef } from 'react';
import { socket } from '../socket';
import { Send, User, LogOut, History, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { messaging } from '../firebase';
import { getToken } from 'firebase/messaging';

const ConsultantChat = () => {
    const [tokenStatus, setTokenStatus] = useState("Initializing...");

    // ADDED: Register FCM Token
    useEffect(() => {
        const registerToken = async () => {
            const token = localStorage.getItem('consultantToken');
            if (!token) {
                setTokenStatus("No Auth Token");
                return;
            }
            if (!messaging) {
                setTokenStatus("Firebase Not Supported");
                return;
            }

            try {
                setTokenStatus("Requesting Permission...");
                const permission = await Notification.requestPermission();
                if (permission === 'granted') {
                    setTokenStatus("Generating Token...");
                    const fcmToken = await getToken(messaging, {
                        vapidKey: "BP-58q8LVZ_4o_4Vh7KiE0kYMa_g8mChjDOF03QfakQ8Y5Zq3h7cU8xfi-glsD0LhjJaqGLXkh8pj7FVZVA-2E8"
                    });
                    if (fcmToken) {
                        console.log("Consultant FCM Token:", fcmToken);
                        setTokenStatus("Sending to Server...");
                        await axios.post('http://localhost:8080/consultant/fcm-token', { fcmToken }, {
                            headers: { 'auth-token': token }
                        });
                        setTokenStatus("Active ✅");
                    } else {
                        setTokenStatus("Token Gen Failed ❌");
                    }
                } else {
                    setTokenStatus("Permission Denied 🚫");
                }
            } catch (error) {
                console.error("Error registering FCM token:", error);
                setTokenStatus(`Error: ${error.message}`);
            }
        };
        registerToken();
    }, []);

    const [activeTab, setActiveTab] = useState('waiting'); // waiting | chat | history
    const [pendingSessions, setPendingSessions] = useState([]);
    const [activeSession, setActiveSession] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const messagesEndRef = useRef(null);
    const [sessionHistory, setSessionHistory] = useState([]);
    const [selectedHistorySession, setSelectedHistorySession] = useState(null);

    const [consultantName, setConsultantName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('consultantToken');
        const name = localStorage.getItem('consultantName');

        if (!token) {
            navigate('/admin-panel');
            return;
        }

        setConsultantName(name || 'Consultant');

        const fetchSessions = async () => {
            try {
                const res = await axios.get('http://localhost:8080/chat/sessions');
                if (res.data.success) {
                    setPendingSessions(res.data.sessions);
                }
            } catch (err) {
                console.error("Failed to fetch sessions", err);
            }
        };

        const fetchHistory = async () => {
            try {
                const res = await axios.get('http://localhost:8080/consultant/my-sessions', {
                });
                if (res.data.success) {
                    setSessionHistory(res.data.sessions);
                }
            } catch (err) {
                console.error("Failed to fetch history", err);
            }
        };

        fetchSessions();
        fetchHistory();

        socket.connect();
        socket.emit('join_consultant', { name: name, token }); // Send token if backend needs it

        socket.on('new_session', (session) => {
            setPendingSessions(prev => [...prev, session]);

            // Play Sound for new waiting session
            try {
                const audio = new Audio('/alert.mp3');
                audio.play().catch(e => console.log('Audio play failed:', e));
            } catch (e) {
                console.log('Error playing sound:', e);
            }

            // Show Native Notification
            if (Notification.permission === 'granted') {
                new Notification("New Chat Request", {
                    body: "A client is waiting for an expert.",
                    icon: "/logo192.png",
                    tag: 'chat-request'
                });
            }
        });

        socket.on('auto_assigned', ({ session, consultantName: assignedName }) => {
            if (assignedName === name) {
                setActiveSession(session);
                setMessages([]);
                setActiveTab('chat');
                socket.emit('join_session', session.token);

                // Play Sound for auto assignment
                try {
                    const audio = new Audio('/alert.mp3');
                    audio.play().catch(e => console.log('Audio play failed:', e));
                } catch (e) {
                    console.log('Error playing sound:', e);
                }

                // Show Native Notification
                if (Notification.permission === 'granted') {
                    new Notification("Immediate Chat Assigned", {
                        body: "You have been matched with a client.",
                        icon: "/logo192.png",
                        tag: 'chat-request'
                    });
                }
            }
        });

        socket.on('session_accepted', ({ token, consultantName: acceptedBy }) => {
            setPendingSessions(prev => prev.filter(s => s.token !== token));
        });

        return () => {
            socket.off('new_session');
            socket.off('auto_assigned');
            socket.off('session_accepted');
            socket.disconnect();
        };
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('consultantToken');
        localStorage.removeItem('consultantName');
        navigate('/admin-panel');
    };

    useEffect(() => {
        const handleMessage = (message) => {
            // Only add message if it belongs to current session AND it's not from self
            if (activeSession && message.token === activeSession.token && message.sender !== 'Consultant') {
                setMessages(prev => [...prev, message]);

                // Play subtle sound for incoming messages
                try {
                    const audio = new Audio('/alert.mp3'); // You could use a softer 'pop.mp3' here in the future
                    audio.volume = 0.5; // lower volume for messages
                    audio.play().catch(e => console.log('Audio play failed:', e));
                } catch (e) { }
            }
        };

        socket.on('receive_message', handleMessage);
        return () => socket.off('receive_message');
    }, [activeSession]);

    const handleAcceptSession = (session) => {
        socket.emit('accept_chat', { token: session.token, consultantName });
        setActiveSession(session);
        setMessages([]);
        setActiveTab('chat');
    };

    const sendMessage = () => {
        if (!inputText.trim() || !activeSession) return;

        const messageData = {
            token: activeSession.token,
            text: inputText,
            sender: 'Consultant',
            consultantName
        };

        socket.emit('send_message', messageData);
        setMessages(prev => [...prev, messageData]);
        setInputText("");
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
            {/* Sidebar */}
            <div className="w-80 bg-white border-r border-gray-200 flex flex-col shadow-sm z-10">
                <div className="p-5 border-b border-gray-100 bg-white">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-gray-800 text-lg">Dashboard</span>
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
                            </span>
                            <button onClick={handleLogout} title="Logout" className="text-gray-400 hover:text-red-500 transition-colors">
                                <LogOut size={18} />
                            </button>
                        </div>
                    </div>
                    {/* DEBUG: Token Status */}
                    <div className="mb-2 text-[10px] text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Notif Status: <span className="font-bold">{tokenStatus}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                        Welcome, <span className="font-semibold text-gray-700">{consultantName}</span>
                    </div>
                </div>

                <div className="flex p-3 gap-2 bg-gray-50/50">
                    <button
                        onClick={() => { setActiveTab('waiting'); setSelectedHistorySession(null); }}
                        className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all 
                            ${activeTab === 'waiting'
                                ? 'bg-white text-blue-600 shadow-sm border border-gray-200'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    >
                        Requests ({pendingSessions.length})
                    </button>
                    <button
                        onClick={() => { setActiveTab('chat'); setSelectedHistorySession(null); }}
                        className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all
                            ${activeTab === 'chat'
                                ? 'bg-white text-blue-600 shadow-sm border border-gray-200'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                        disabled={!activeSession}
                    >
                        Active Chat
                    </button>
                    <button
                        onClick={() => { setActiveTab('history'); setSelectedHistorySession(null); }}
                        className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all
                            ${activeTab === 'history'
                                ? 'bg-white text-blue-600 shadow-sm border border-gray-200'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    >
                        History ({sessionHistory.length})
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                    {activeTab === 'waiting' && pendingSessions.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                            <User size={32} className="mb-2 opacity-20" />
                            <p className="text-sm">No pending requests</p>
                        </div>
                    )}

                    {activeTab === 'waiting' && pendingSessions.map(session => (
                        <div key={session.token} className="p-4 border border-gray-100 rounded-xl bg-white hover:shadow-md transition-shadow group">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <div className="font-semibold text-gray-800 text-sm">Client #{(session.token || "").slice(-4)}</div>
                                    <div className="text-xs text-blue-500 mt-0.5">Looking for help</div>
                                </div>
                                <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded">
                                    {session.createdAt ? new Date(session.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Just now'}
                                </span>
                            </div>
                            <button
                                onClick={() => handleAcceptSession(session)}
                                className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm shadow-blue-200"
                            >
                                Accept Request
                            </button>
                        </div>
                    ))}

                    {activeTab === 'chat' && activeSession && (
                        <div className="p-4 border border-blue-100 rounded-xl bg-blue-50/50">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200">
                                    C
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800 text-sm">Client #{(activeSession.token || "").slice(-4)}</div>
                                    <div className="text-xs text-green-600 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active Now
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    if (activeSession) {
                                        socket.emit('end_chat', { token: activeSession.token, consultantName });
                                    }
                                    setActiveSession(null);
                                    setActiveTab('waiting');
                                }}
                                className="w-full py-2 text-xs font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                            >
                                End Session
                            </button>
                        </div>
                    )}

                    {activeTab === 'history' && sessionHistory.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                            <History size={32} className="mb-2 opacity-20" />
                            <p className="text-sm">No past sessions yet</p>
                        </div>
                    )}

                    {activeTab === 'history' && sessionHistory.map(session => (
                        <div
                            key={session._id}
                            onClick={() => setSelectedHistorySession(session)}
                            className={`p-4 border rounded-xl cursor-pointer transition-all ${selectedHistorySession?._id === session._id
                                ? 'border-blue-300 bg-blue-50/50 shadow-sm'
                                : 'border-gray-100 bg-white hover:shadow-md'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="font-semibold text-gray-800 text-sm">
                                        {session.clientName || 'Guest'} #{(session.token || "").slice(-4)}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                                        <Clock size={10} />
                                        {session.createdAt ? new Date(session.createdAt).toLocaleDateString() : ''}
                                        {' • '}
                                        {session.messages?.length || 0} messages
                                    </div>
                                </div>
                                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${session.status === 'closed'
                                    ? 'text-gray-500 bg-gray-100'
                                    : 'text-green-600 bg-green-50'
                                    }`}>
                                    {session.status === 'closed' ? 'Resolved' : session.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
                {activeTab === 'waiting' && !selectedHistorySession ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-400 bg-gray-50/30">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                            <span className="text-4xl">👋</span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Welcome, {consultantName || 'Expert'}!</h2>
                        <p className="max-w-xs text-center text-sm text-gray-500">
                            Select a request from the sidebar to start a consultation session.
                        </p>
                    </div>
                ) : activeTab === 'history' || selectedHistorySession ? (
                    <div className="flex-1 flex flex-col bg-gray-50/30 overflow-hidden">
                        {selectedHistorySession ? (
                            <>
                                <div className="h-16 px-6 bg-white border-b border-gray-100 flex items-center justify-between shadow-sm z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                                            {(selectedHistorySession.clientName || 'G')[0].toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800">Client #{(selectedHistorySession.token || "").slice(-4)}</div>
                                            <div className="text-xs text-gray-400">
                                                {selectedHistorySession.createdAt ? new Date(selectedHistorySession.createdAt).toLocaleString() : ''}
                                                {selectedHistorySession.closedAt ? ` — ${new Date(selectedHistorySession.closedAt).toLocaleString()}` : ''}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-medium">
                                        {selectedHistorySession.messages?.length || 0} messages
                                    </span>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 space-y-3">
                                    {selectedHistorySession.messages && selectedHistorySession.messages.length > 0 ? (
                                        selectedHistorySession.messages.map((msg, i) => (
                                            <div key={i}
                                                className={`flex ${msg.sender === 'Consultant' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'Consultant'
                                                    ? 'bg-blue-600 text-white rounded-br-md'
                                                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-md'
                                                    }`}>
                                                    {msg.text}
                                                    <div className={`text-[10px] mt-1 ${msg.sender === 'Consultant' ? 'text-blue-200' : 'text-gray-400'
                                                        }`}>
                                                        {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex items-center justify-center h-40 text-gray-400 text-sm">
                                            No messages recorded for this session
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                                <History size={48} className="mb-4 opacity-20" />
                                <h3 className="text-lg font-semibold text-gray-600 mb-1">Session History</h3>
                                <p className="text-sm text-gray-400">Select a past session to view the conversation</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <div className="h-16 px-6 bg-white border-b border-gray-100 flex items-center justify-between shadow-sm z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm shadow-blue-200">
                                    #{activeSession?.token.slice(-4)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-sm">Client Consultation</h3>
                                    <p className="text-xs text-gray-500">Session ID: {activeSession?.token}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-100 flex items-center gap-1.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    Live Connection
                                </span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 scroll-smooth">
                            <div className="text-center text-xs text-gray-400 my-4">
                                <span className="bg-gray-100 px-3 py-1 rounded-full">Session Started</span>
                            </div>

                            {messages.map((m, i) => (
                                <div key={i} className={`flex w-full ${m.sender === 'Consultant' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`flex max-w-[70%] ${m.sender === 'Consultant' ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>
                                        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold 
                                            ${m.sender === 'Consultant' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'}`}>
                                            {m.sender === 'Consultant' ? 'You' : 'Cli'}
                                        </div>
                                        <div className={`px-5 py-3 shadow-sm text-sm leading-relaxed 
                                            ${m.sender === 'Consultant'
                                                ? 'bg-blue-600 text-white rounded-2xl rounded-br-sm'
                                                : 'bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-bl-sm'
                                            }`}>
                                            <p className="whitespace-pre-wrap">{m.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} className="h-4" />
                        </div>

                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-full border border-gray-200 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50 transition-all shadow-sm">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                    placeholder="Type your message here..."
                                    className="flex-1 bg-transparent px-4 py-2 focus:outline-none text-gray-700 placeholder-gray-400"
                                    autoFocus
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={!inputText.trim()}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
                                        ${inputText.trim()
                                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200 transform hover:scale-105'
                                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                                >
                                    <Send size={18} className={inputText.trim() ? 'ml-0.5' : ''} />
                                </button>
                            </div>
                            <div className="text-center mt-2">
                                <span className="text-[10px] text-gray-400">Press Enter to send</span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ConsultantChat;
