import mongoose from 'mongoose';

const chatSessionSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true },
    status: { type: String, enum: ['waiting', 'active', 'closed'], default: 'waiting' },
    consultantName: { type: String, default: null },
    clientName: { type: String, default: 'Guest' },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('ChatSession', chatSessionSchema);
