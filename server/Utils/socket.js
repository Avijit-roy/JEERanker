import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

// Move userSocketMap declaration before it's used
const userSocketMap = {}; // {userId: socketId}

const io = new Server(server, {
  cors: {
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST"], // Add allowed methods
  },
});

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != null) {
    // Better null check
    userSocketMap[userId] = socket.id;
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  }

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    if (userId != null) {
      // Add check before delete
      delete userSocketMap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    }
  });
});

export { io, app, server };
