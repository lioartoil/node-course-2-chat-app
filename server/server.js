const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
	console.log('New user connected');

	socket.emit('newMessage', {
		from: 'test@test.com',
		text: 'This is from test.server',
		createdAt: new Date()
	});

	socket.on('createMessage', message => {
		console.log('New Message', message);
	});

	socket.on('disconnect', () => {
		console.log('User was disconnected');
	});
});

server.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});
