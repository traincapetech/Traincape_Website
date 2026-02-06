import express from 'express';
import { requestHumanHandover, endSession } from '../controllers/chat.controller.js';

const chatRouter = express.Router();

chatRouter.post('/request-human', requestHumanHandover);
chatRouter.post('/end-session', endSession);

export default chatRouter;