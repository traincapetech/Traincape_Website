import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { socket } from '../socket';

const ChatbotPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [token, setToken] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(false);

    const startHandover = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:8080/chat/request-human', { method: 'POST' });
            const data = await res.json();
            if (data.success) {
                setToken(data.token);
                socket.connect();
                socket.emit('join_session', data.token);
                setMessages([{ sender: 'System', text: `Connected to ${data.consultantName}` }]);
            } else {
                setMessages([{ sender: 'System', text: data.message || "No consultants free at the moment." }]);
            }
        } catch (err) {
            setMessages([{ sender: 'System', text: "Connection error. Please try again later." }]);
        }
        setLoading(false);
    };

    const sendMessage = () => {
        if (!inputText.trim() || !token) return;
        socket.emit('send_message', { token, text: inputText, sender: 'User' });
        setInputText("");
    };

    useEffect(() => {
        socket.on('receive_message', (m) => setMessages(prev => [...prev, m]));
        return () => socket.off('receive_message');
    }, []);

    return (
        <>
            {/* Chatbot Icon */}
            <div
                className="chatbot-icon"
                style={{
                    position: 'fixed',
                    bottom: '100px', // Above WhatsApp (20px + 60px + 20px spacing)
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
                        width: '350px',
                        height: '450px',
                        backgroundColor: 'white',
                        borderRadius: '15px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                        zIndex: 2000,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        animation: 'slideIn 0.3s ease'
                    }}
                >
                    {/* Header */}
                    <div style={{ backgroundColor: '#007bff', color: 'white', padding: '15px', fontWeight: 'bold' }}>
                        Traincape Support
                    </div>

                    {/* Messages */}
                    <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {messages.length === 0 && !token && (
                            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                                <p>Hello! How can we help you today?</p>
                                <button
                                    onClick={startHandover}
                                    disabled={loading}
                                    style={{
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 20px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        marginTop: '10px'
                                    }}
                                >
                                    {loading ? "Connecting..." : "Talk to a Human"}
                                </button>
                            </div>
                        )}
                        {messages.map((m, i) => (
                            <div key={i} style={{
                                alignSelf: m.sender === 'User' ? 'flex-end' : 'flex-start',
                                backgroundColor: m.sender === 'User' ? '#007bff' : '#f0f0f0',
                                color: m.sender === 'User' ? 'white' : 'black',
                                padding: '8px 12px',
                                borderRadius: '10px',
                                maxWidth: '80%',
                                fontSize: '14px'
                            }}>
                                <span style={{ fontSize: '10px', display: 'block', opacity: 0.7 }}>{m.sender}</span>
                                {m.text}
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    {token && (
                        <div style={{ padding: '15px', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
                            <input
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                placeholder="Type a message..."
                                style={{ flex: 1, border: '1px solid #ddd', borderRadius: '5px', padding: '8px' }}
                            />
                            <button onClick={sendMessage} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#007bff' }}>
                                <Send size={20} />
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
