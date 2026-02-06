import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { socket } from '../socket';
import { useLocation } from 'react-router-dom';
import chatbotData from '../data/chatbot_flow.json';

const ChatbotPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [token, setToken] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const [currentFlow, setCurrentFlow] = useState(chatbotData.flows.default);

    // Detect Route Change & Update Flow
    useEffect(() => {
        const flowId = chatbotData.routes[location.pathname];
        if (flowId && chatbotData.flows[flowId]) {
            setCurrentFlow(chatbotData.flows[flowId]);
        } else {
            setCurrentFlow(chatbotData.flows.default);
        }
    }, [location.pathname]);

    // Initial Greeting when opening
    useEffect(() => {
        if (isOpen && messages.length === 0 && !token) {
            setMessages([{
                sender: 'System',
                text: `Hi! Welcome to ${currentFlow.title || "Traincape Support"}. How can I assist you today?`,
                isGreeting: true
            }]);
        }
    }, [isOpen, currentFlow]);

    const handleOptionClick = (option) => {
        setMessages(prev => [...prev, { sender: 'User', text: option.label }]);

        if (option.action === 'handover') {
            startHandover();
        } else {
            setTimeout(() => {
                setMessages(prev => [...prev, { sender: 'System', text: option.answer }]);
            }, 500);
        }
    };

    const startHandover = async () => {
        setLoading(true);
        setMessages(prev => [...prev, { sender: 'System', text: "Connecting you to a human expert..." }]);
        try {
            const res = await fetch('http://localhost:8080/chat/request-human', { method: 'POST' });
            const data = await res.json();
            if (data.success) {
                setToken(data.token);
                socket.connect();
                socket.emit('join_session', data.token);
                setMessages(prev => [...prev, { sender: 'System', text: `You are now connected to ${data.consultantName}.` }]);
            } else {
                setMessages(prev => [...prev, { sender: 'System', text: data.message || "No consultants free at the moment." }]);
            }
        } catch (err) {
            setMessages(prev => [...prev, { sender: 'System', text: "Connection error. Please try again later." }]);
        }
        setLoading(false);
    };

    const sendMessage = () => {
        if (!inputText.trim() || !token) return;
        socket.emit('send_message', { token, text: inputText, sender: 'User' });
        setMessages(prev => [...prev, { sender: 'User', text: inputText }]);
        setInputText("");
    };

    useEffect(() => {
        socket.on('receive_message', (m) => {
            if (m.sender !== 'User') {
                setMessages(prev => [...prev, m]);
            }
        });
        return () => socket.off('receive_message');
    }, []);

    return (
        <>
            {/* Chatbot Icon */}
            <div
                className="chatbot-icon"
                style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '20px',
                    zIndex: 1000,
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#007bff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    {isOpen ? <X color="white" size={30} /> : <MessageSquare color="white" size={30} />}
                </div>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '170px',
                        right: '20px',
                        width: '360px',
                        height: '500px',
                        backgroundColor: 'white',
                        borderRadius: '15px',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                        zIndex: 2000,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        fontFamily: 'Arial, sans-serif'
                    }}
                >
                    {/* Header */}
                    <div style={{ backgroundColor: '#007bff', color: 'white', padding: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{token ? "Live Support" : currentFlow.title || "Support"}</span>
                        {token && <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' }}>Online</span>}
                    </div>

                    {/* Messages Area */}
                    <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#f9f9f9' }}>
                        {messages.map((m, i) => (
                            <div key={i} style={{
                                alignSelf: m.sender === 'User' ? 'flex-end' : 'flex-start',
                                backgroundColor: m.sender === 'User' ? '#007bff' : 'white',
                                color: m.sender === 'User' ? 'white' : '#333',
                                padding: '10px 14px',
                                borderRadius: '12px',
                                borderBottomLeftRadius: m.sender !== 'User' ? '2px' : '12px',
                                borderBottomRightRadius: m.sender === 'User' ? '2px' : '12px',
                                maxWidth: '85%',
                                fontSize: '14px',
                                boxShadow: m.sender !== 'User' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                            }}>
                                {m.text}
                            </div>
                        ))}

                        {/* Options Buttons (Only show when NOT chatting with human) */}
                        {!token && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                                {currentFlow.options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionClick(opt)}
                                        style={{
                                            background: 'white',
                                            border: '1px solid #007bff',
                                            color: '#007bff',
                                            padding: '8px 12px',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            fontSize: '13px',
                                            textAlign: 'left',
                                            transition: 'all 0.2s'
                                        }}
                                        onMouseEnter={e => { e.target.style.background = '#007bff'; e.target.style.color = 'white'; }}
                                        onMouseLeave={e => { e.target.style.background = 'white'; e.target.style.color = '#007bff'; }}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                                {/* Specific Handover Button if not in options */}
                                <button
                                    onClick={() => handleOptionClick({ label: "Talk to a Human Agent", action: "handover" })}
                                    style={{
                                        background: '#333',
                                        border: 'none',
                                        color: 'white',
                                        padding: '8px 12px',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        fontSize: '13px',
                                        textAlign: 'center',
                                        marginTop: '5px'
                                    }}
                                >
                                    💬 Talk to Human Expert
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Input Area (Only active when token exists) */}
                    {token && (
                        <div style={{ padding: '15px', borderTop: '1px solid #eee', display: 'flex', gap: '10px', backgroundColor: 'white' }}>
                            <input
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                placeholder="Type your message..."
                                style={{ flex: 1, border: '1px solid #ddd', borderRadius: '20px', padding: '10px 15px', outline: 'none' }}
                            />
                            <button
                                onClick={sendMessage}
                                style={{
                                    border: 'none',
                                    background: '#007bff',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: 'white'
                                }}
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    )}
                </div>
            )}

            <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </>
    );
};

export default ChatbotPopup;
