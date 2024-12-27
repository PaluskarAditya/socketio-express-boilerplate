const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const { v4: uuid } = require('uuid');
const { ExpressPeerServer } = require('peer');
const io = new Server(server, { cors: true });
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

server.listen(5000, () => console.log('serving on port 5000'));