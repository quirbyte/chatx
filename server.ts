import WebSocket, { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

ws.on("connection", (socket) => {
  console.log("Client Connected");

  socket.on("message", (message) => {
    console.log(message.toString());
  });

  socket.on("close", () => {
    console.log("Client connected...");
  });
});
