import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import API_BASE_URL from './config/api';

const Chat = () => {
    const [token, setToken] = useState(null);
    const [messages, setMessages] = useState([]);
    const [currentStep, setCurrentStep] = useState("start");

    // Manual Tree
    const tree = {
        start: { msg: "How can I help?", opts: [{ label: "Talk to Human", action: "handover" }] }
    };

    const startHandover = async () => {
        const res = await fetch(`${API_BASE_URL}/chat/request-human`, { method: 'POST' });
        const data = await res.json();
        if (data.success) {
            setToken(data.token);
            socket.connect();
            socket.emit('join_session', data.token);
        }
    };

    useEffect(() => {
        socket.on('receive_message', (m) => setMessages(prev => [...prev, m]));
        return () => socket.off('receive_message');
    }, []);

    if (!token) {
        return (
            <div>
                <p>{tree[currentStep].msg}</p>
                <button onClick={startHandover}>Connect to Consultant</button>
            </div>
        );
    }

    return (
        <div>
            {messages.map((m, i) => <p key={i}>{m.sender}: {m.text}</p>)}
            <input onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    socket.emit('send_message', { token, text: e.target.value, sender: 'User' });
                    e.target.value = '';
                }
            }} />
        </div>
    );
};