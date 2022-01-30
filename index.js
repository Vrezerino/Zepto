const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const { passesFilter } = require('./util/utils');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    if (passesFilter(msg)) {
			const sanitizedMsg = msg.replace('/^[a-z0-9]+$/i', '\\$&');
			io.emit('chat message', sanitizedMsg);
		} else {
			//io.emit('my error', 'error');
		}
  });
});

http.listen(port);
