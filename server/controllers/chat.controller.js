import ChatSession from '../model/chatSession.model.js';
import { getIO } from '../socket/socketManager.js';

export const requestHumanHandover = async (req, res) => {
  try {
    const sessionToken = `live_${Date.now()}`;

    // Create new session in Waiting state
    const newSession = await ChatSession.create({
      token: sessionToken,
      status: 'waiting'
    });

    // Notify all consultants
    const io = getIO();
    if (io) {
      io.to('consultant_room').emit('new_session', newSession);
    }

    res.json({ success: true, token: sessionToken, status: 'waiting' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const endSession = async (req, res) => {
  const { token } = req.body;
  await ChatSession.findOneAndUpdate({ token }, { status: 'closed' });
  res.json({ success: true });
};

// Endpoint for Consultant App to see what's waiting
export const getPendingSessions = async (req, res) => {
  try {
    const sessions = await ChatSession.find({ status: 'waiting' }).sort({ createdAt: 1 });
    res.json({ success: true, sessions });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};