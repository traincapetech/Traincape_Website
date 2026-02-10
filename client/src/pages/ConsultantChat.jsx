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

    // optimize: fetch initial pending sessions
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

        // Join consultant room to receive updates
        socket.connect();
        socket.emit('join_consultant');

        // Listen for new sessions
        socket.on('new_session', (session) => {
            setPendingSessions(prev => [...prev, session]);
        });

        // Listen for when a session is accepted by someone else (or self confirmation)
        socket.on('session_accepted', ({ token, consultantName }) => {
            // Remove from pending
            setPendingSessions(prev => prev.filter(s => s.token !== token));
        });

        // Listen for incoming messages
        socket.on('receive_message', (message) => {
            if (activeSession && message.token === activeSession.token) {
                setMessages(prev => [...prev, message]);
            }
        });

        return () => {
            socket.off('new_session');
            socket.off('session_accepted');
            socket.off('receive_message');
            socket.disconnect();
        };
    }, [activeSession]);

    const handleAcceptSession = (session) => {
        const consultantName = "Expert Consultant"; // In real app, get from auth
        socket.emit('accept_chat', { token: session.token, consultantName });
        setActiveSession(session);
        setMessages([]); // Clear previous chat if any
        setActiveTab('chat');
    };

    const sendMessage = () => {
        if (!inputText.trim() || !activeSession) return;

        const messageData = {
            token: activeSession.token,
            text: inputText,
            sender: 'Consultant',
            consultantName: "Expert Consultant"
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
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/4 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200 font-bold text-lg text-blue-600">
                    Consultant Dashboard
                </div>

                <div className="flex p-2 gap-2">
                    <button
                        onClick={() => setActiveTab('waiting')}
                        className={`flex-1 py-2 rounded-md ${activeTab === 'waiting' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        Waiting ({pendingSessions.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('chat')}
                        className={`flex-1 py-2 rounded-md ${activeTab === 'chat' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                        disabled={!activeSession}
                    >
                        Active Chat
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-2">
                    {activeTab === 'waiting' && (
                        <div className="space-y-2">
                            {pendingSessions.length === 0 && <p className="text-gray-400 text-center mt-4">No pending requests</p>}
                            {pendingSessions.map(session => (
                                <div key={session.token} className="p-3 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="font-medium text-gray-800">Client #{session.token.slice(-4)}</div>
                                        <span className="text-xs text-gray-400">{new Date(session.createdAt).toLocaleTimeString()}</span>
                                    </div>
                                    <button
                                        onClick={() => handleAcceptSession(session)}
                                        className="w-full mt-2 bg-blue-600 text-white py-1.5 rounded-md text-sm hover:bg-blue-700"
                                    >
                                        Accept Chat
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'chat' && activeSession && (
                        <div className="p-3 border rounded-lg bg-blue-50 border-blue-200">
                            <div className="font-medium text-blue-800">Current Session</div>
                            <div className="text-sm text-blue-600">Client #{activeSession.token.slice(-4)}</div>
                            <button
                                onClick={() => { setActiveSession(null); setActiveTab('waiting'); }}
                                className="text-xs text-red-500 mt-2 hover:underline"
                            >
                                Leave Chat
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {activeTab === 'waiting' ? (
                    <div className="flex-1 flex items-center justify-center text-gray-400">
                        Select a request from the list to start chatting
                    </div>
                ) : (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 bg-white border-b border-gray-200 shadow-sm flex justify-between items-center">
                            <div className="font-bold text-gray-800">
                                Chatting with Client #{activeSession?.token.slice(-4)}
                            </div>
                            <div className="text-sm text-green-600 flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> Live
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.sender === 'Consultant' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[70%] rounded-2xl px-4 py-2 ${m.sender === 'Consultant'
                                        ? 'bg-blue-600 text-white rounded-tr-none'
                                        : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'
                                        }`}>
                                        <p className="whitespace-pre-wrap">{m.text}</p>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-200">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                    placeholder="Type your message..."
                                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500 hover:border-blue-400 transition-colors"
                                />
                                <button
                                    onClick={sendMessage}
                                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center w-10 h-10"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ConsultantChat;
