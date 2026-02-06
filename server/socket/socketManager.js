import { Server } from 'socket.io';

export const initSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: { origin: process.env.FRONTEND_URL } 
  });

  io.on('connection', (socket) => {
    socket.on('join_session', (token) => {
      socket.join(token);
    });

    socket.on('send_message', (data) => {
      // Broadcast to the specific token room
      io.to(data.token).emit('receive_message', data);
    });
  });
};