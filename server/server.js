const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const public = path.join(__dirname, '../public')
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(public));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage', {
		from: 'bob@test.com',
		text: 'hey, whats up',
		createdAt: 123213
	});

	socket.on('createMessage', (newMessage) => {
		console.log('createMessage', newMessage);
	});

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	});
});


server.listen(port, () => {
	console.log(`Started on port ${port}`);
});