import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { socket } from '../socket';
import { useLocation } from 'react-router-dom';
import chatbotData from '../data/chatbot_flow.json';

const GlobalChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [token, setToken] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    const location = useLocation();
    const [currentFlow, setCurrentFlow] = useState({ title: "Support", options: [] });

    // ---------------------------------------------------------
    // 1. THE OBSERVER: Listen to URL changes to update context
    // ---------------------------------------------------------

    useEffect(() => {
        // Reset chat if not talking to a human
        if (!token) {
            setMessages([]);
        }

        const currentPath = location.pathname;
        const flowId = chatbotData.routes[currentPath];

        if (flowId && chatbotData.flows[flowId]) {
            const flowData = chatbotData.flows[flowId];
            setCurrentFlow({
                title: flowData.title,
                options: [
                    ...flowData.options,
                    // Ensure Human Expert option is always present
                    ...(flowData.options.some(o => o.action === 'handover')
                        ? []
                        : [{ label: "Talk to Human Expert", action: "handover" }])
                ]
            });

            // Optional: Update greeting if chat is already open
            if (isOpen && !token) {
                const greeting = flowData.welcome || `Welcome to ${flowData.title}. How can I assist you?`;
                setMessages([{ sender: 'System', text: greeting, isGreeting: true }]);
            }

        } else {
            setGenericFlow();
        }

    }, [location.pathname, token, isOpen]); // Re-run when URL changes

    const setGenericFlow = () => {
        // Use existing chatbot_flow.json or hardcoded default
        const flowId = chatbotData.routes[location.pathname];
        if (flowId && chatbotData.flows[flowId]) {
            setCurrentFlow(chatbotData.flows[flowId]);
        } else {
            setCurrentFlow({
                title: "Traincape Support",
                options: [
                    { label: "What services do you provide?", answer: "We provide IT training, certifications, and consultancy services." },
                    { label: "Where are you located?", answer: "We have a global presence. Check our Contact Us page." },
                    { label: "Talk to Human Expert", action: "handover" }
                ]
            });
        }
    };

    // ---------------------------------------------------------
    // 2. CHAT LOGIC
    // ---------------------------------------------------------

    // Initial Greeting
    useEffect(() => {
        if (isOpen && messages.length === 0 && !token) {
            const greeting = `Hi! Welcome to ${currentFlow.title || "Support"}. How can I assist you today?`;
            setMessages([{ sender: 'System', text: greeting, isGreeting: true }]);
        }
    }, [isOpen, currentFlow, token, messages.length]);

    const handleOptionClick = (option) => {
        setMessages(prev => [...prev, { sender: 'User', text: option.label }]);

        if (option.action === 'handover') {
            startHandover();
        } else {
            setIsTyping(true);
            setTimeout(() => {
                setMessages(prev => [...prev, { sender: 'System', text: option.answer }]);
                setIsTyping(false);
            }, 600);
        }
    };

    const [isWaiting, setIsWaiting] = useState(false);
    const [consultantName, setConsultantName] = useState(null);

    // ... (keep other state)

    const startHandover = async () => {
        setLoading(true);
        setMessages(prev => [...prev, { sender: 'System', text: "Requesting a human expert..." }]);
        try {
            const res = await fetch('http://localhost:8080/chat/request-human', { method: 'POST' }); // Ensure port is correct, usually 3001 or 8080 depending on setup
            const data = await res.json();

            if (data.success) {
                setToken(data.token);
                socket.connect();
                socket.emit('join_session', data.token);

                if (data.status === 'waiting') {
                    setIsWaiting(true);
                    setMessages(prev => [...prev, { sender: 'System', text: "We have notified our experts. Please wait while someone picks up your chat..." }]);
                } else {
                    // Should actally not happen in new flow, but backward compat
                    setMessages(prev => [...prev, { sender: 'System', text: `Connected to ${data.consultantName}` }]);
                }

            } else {
                setMessages(prev => [...prev, { sender: 'System', text: data.message || "Service unavailable." }]);
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
            if (m.sender !== 'User') setMessages(prev => [...prev, m]);
        });

        socket.on('consultant_joined', (data) => {
            setIsWaiting(false);
            setConsultantName(data.consultantName);
            setMessages(prev => [...prev, { sender: 'System', text: `You are now connected to ${data.consultantName}.` }]);
        });

        return () => {
            socket.off('receive_message');
            socket.off('consultant_joined');
        };
    }, []);

    // Helper to render formatted text
    const renderMessageText = (text) => {
        return text.split('\n').map((line, i) => (
            <React.Fragment key={i}>
                {line}
                {i < text.split('\n').length - 1 && <br />}
            </React.Fragment>
        ));
    };

    // ---------------------------------------------------------
    // 3. UI RENDER
    // ---------------------------------------------------------
    return (
        <>
            {/* Toggle Button */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999,
                    width: '60px', height: '60px', borderRadius: '50%',
                    backgroundColor: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)', cursor: 'pointer', transition: 'transform 0.3s'
                }}
            >
                {isOpen ? <X color="white" size={30} /> : <MessageSquare color="white" size={30} />}
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    position: 'fixed', bottom: '100px', right: '30px',
                    width: '350px', height: '500px', backgroundColor: 'white',
                    borderRadius: '15px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                    zIndex: 10000, display: 'flex', flexDirection: 'column', overflow: 'hidden',
                    fontFamily: 'Arial, sans-serif', animation: 'fadeIn 0.3s ease'
                }}>
                    {/* Header */}
                    <div style={{ padding: '15px', backgroundColor: '#007bff', color: 'white', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
                        <span>{token ? "Live Support" : currentFlow.title}</span>
                        {token && <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' }}>Online</span>}
                    </div>

                    {/* Messages */}
                    <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#f9f9f9' }}>
                        {messages.map((m, i) => (
                            <div key={i} style={{
                                alignSelf: m.sender === 'User' ? 'flex-end' : 'flex-start',
                                backgroundColor: m.sender === 'User' ? '#007bff' : 'white',
                                color: m.sender === 'User' ? 'white' : '#333',
                                padding: '10px 14px', borderRadius: '12px',
                                borderBottomLeftRadius: m.sender !== 'User' ? '2px' : '12px',
                                borderBottomRightRadius: m.sender === 'User' ? '2px' : '12px',
                                maxWidth: '85%', fontSize: '14px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                                lineHeight: '1.4'
                            }}>
                                {renderMessageText(m.text)}
                            </div>
                        ))}
                        {isTyping && <div style={{ alignSelf: 'flex-start', color: '#888', fontSize: '12px', marginLeft: '10px' }}>Typing...</div>}

                        {/* Options Buttons */}
                        {!token && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                                {currentFlow.options && currentFlow.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => handleOptionClick(opt)} style={{
                                        background: 'white', border: '1px solid #007bff', color: '#007bff',
                                        padding: '8px 12px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px', textAlign: 'left',
                                        transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                                    }}
                                        onMouseEnter={e => { e.target.style.background = '#007bff'; e.target.style.color = 'white'; }}
                                        onMouseLeave={e => { e.target.style.background = 'white'; e.target.style.color = '#007bff'; }}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div style={{ float: "left", clear: "both" }}
                            ref={(el) => { if (el) { el.scrollIntoView({ behavior: "smooth" }); } }}>
                        </div>
                    </div>

                    {/* Input */}
                    {token && !isWaiting && (
                        <div style={{ padding: '15px', borderTop: '1px solid #eee', display: 'flex', gap: '10px', backgroundColor: 'white' }}>
                            <input
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                placeholder="Type a message..."
                                style={{ flex: 1, border: '1px solid #ddd', borderRadius: '20px', padding: '10px 15px', outline: 'none' }}
                            />
                            <button onClick={sendMessage} style={{ border: 'none', background: '#007bff', borderRadius: '50%', width: '40px', height: '40px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                <Send size={18} />
                            </button>
                        </div>
                    )}
                </div>
            )}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
};

export default GlobalChat;
