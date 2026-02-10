import { Server } from 'socket.io';

export const initSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: { origin: "*" } // Allow all origins for now to support external consultant app
  });

  io.on('connection', (socket) => {
    // Consultant joining the "Consultant Dashboard" room
    socket.on('join_consultant', () => {
      socket.join('consultant_room');
    });

    // Client or Consultant joining a specific chat session
    socket.on('join_session', (token) => {
      socket.join(token);
    });

    // Consultant accepting a chat
    socket.on('accept_chat', ({ token, consultantName }) => {
      socket.join(token); // Ensure consultant is in the room
      io.to(token).emit('consultant_joined', { consultantName });
      // Also notify other consultants to maybe remove this from the list? 
      // For now, simplicity is key.
      io.to('consultant_room').emit('session_accepted', { token, consultantName });
    });

    socket.on('send_message', (data) => {
      // Broadcast to the specific token room
      io.to(data.token).emit('receive_message', data);
    });

    socket.on('end_chat', ({ token }) => {
      io.to(token).emit('chat_ended');
      socket.leave(token);
    });
  });

  return io; // Return IO instance if needed elsewhere
};

// Singleton to access IO from controllers if needed
let ioInstance;
export const getIO = () => ioInstance;
export const setIO = (io) => { ioInstance = io; };