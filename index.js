import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors'

const app = express();

app.use(cors({ origin: '*' }))

const server = createServer(app);
const io = new Server(server, { 
  cors: '*',  
  methods: ['GET', 'POST']
});

app.get('/', (req, res) => {
  res.sendFile(new URL('./index.html', import.meta.url).pathname);
});

io.on('connection', (socket) => {
  console.log('User connected')
  socket.on('message', (data) => {
    io.emit('message', data)
  })
});

server.listen(5000, () => {
  console.log('server running at http://localhost:8000');
});