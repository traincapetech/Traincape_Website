import React, { useState, useEffect, useRef } from 'react';
import { socket } from '../socket';
import { Send, User } from 'lucide-react';

const ConsultantChat = () => {
    const [activeTab, setActiveTab] = useState('waiting'); // waiting | active
    const [pendingSessions, setPendingSessions] = useState([]);
    const [activeSession, setActiveSession] = useState(null); // The session currently being chatted with
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const messagesEndRef = useRef(null);

    const myName = "Expert Consultant";

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const res = await fetch('http://localhost:8080/chat/sessions');
                const data = await res.json();
                if (data.success) {
                    setPendingSessions(data.sessions);
                }
            } catch (err) {
                console.error("Failed to fetch sessions", err);
            }
        };

        fetchSessions();

        socket.connect();
        socket.emit('join_consultant', { name: myName });

        socket.on('new_session', (session) => {
            setPendingSessions(prev => [...prev, session]);
        });

        socket.on('auto_assigned', ({ session, consultantName }) => {
            if (consultantName === myName) {
                setActiveSession(session);
                setMessages([]);
                setActiveTab('chat');
                socket.emit('join_session', session.token);
            }
        });

        socket.on('session_accepted', ({ token, consultantName }) => {
            setPendingSessions(prev => prev.filter(s => s.token !== token));
        });

        return () => {
            socket.off('new_session');
            socket.off('auto_assigned');
            socket.off('session_accepted');
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        const handleMessage = (message) => {
            // Only add message if it belongs to current session AND it's not from self (since we add self-messages optimistically)
            if (activeSession && message.token === activeSession.token && message.sender !== 'Consultant') {
                setMessages(prev => [...prev, message]);
            }
        };

        socket.on('receive_message', handleMessage);
        return () => socket.off('receive_message');
    }, [activeSession]);

    const handleAcceptSession = (session) => {
        socket.emit('accept_chat', { token: session.token, consultantName: myName });
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
            consultantName: myName
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
                <div className="p-5 border-b border-gray-100 bg-white flex items-center justify-between">
                    <span className="font-bold text-gray-800 text-lg">Dashboard</span>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
                    </span>
                </div>

                <div className="flex p-3 gap-2 bg-gray-50/50">
                    <button
                        onClick={() => setActiveTab('waiting')}
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all 
                            ${activeTab === 'waiting'
                                ? 'bg-white text-blue-600 shadow-sm border border-gray-200'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    >
                        Requests ({pendingSessions.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('chat')}
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all
                            ${activeTab === 'chat'
                                ? 'bg-white text-blue-600 shadow-sm border border-gray-200'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                        disabled={!activeSession}
                    >
                        Active Chat
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
                                onClick={() => { setActiveSession(null); setActiveTab('waiting'); }}
                                className="w-full py-2 text-xs font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                            >
                                End Session
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
                {activeTab === 'waiting' ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-400 bg-gray-50/30">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                            <span className="text-4xl">👋</span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Welcome Back, Expert!</h2>
                        <p className="max-w-xs text-center text-sm text-gray-500">
                            Select a request from the sidebar to start a consultation session.
                        </p>
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
