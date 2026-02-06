import Consultant from '../model/consultant.model.js';

export const requestHumanHandover = async (req, res) => {
  try {
    const sessionToken = `live_${Date.now()}`;

    // Find 1 free consultant and lock them immediately
    const consultant = await Consultant.findOneAndUpdate(
      { isOnline: true, activeToken: null },
      { $set: { activeToken: sessionToken } },
      { new: true }
    );

    if (!consultant) {
      return res.status(404).json({ success: false, message: "No consultants free" });
    }

    res.json({ success: true, token: sessionToken, consultantName: consultant.name });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const endSession = async (req, res) => {
  const { token } = req.body;
  await Consultant.findOneAndUpdate({ activeToken: token }, { activeToken: null });
  res.json({ success: true });
};