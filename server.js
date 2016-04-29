var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment= require ('moment');


app.use(express.static(__dirname+'/public'));

io.on('connection', function (socket) {
	var now=moment();
	console.log('User connected via socket.io!');

	socket.on('message', function (message){	
		now=moment();
		console.log('Message received at server: '+message.text);
		//send it to every other browser that is connected, except who sent
		message.timestamp=now.valueOf();

		io.emit('message',message);

	});

	socket.emit('message', {
		name : "System",
		text:'Welcome to the chat application!',
		timestamp : now
	});

})

http.listen(PORT, function () {
	console.log('Server started!');
})
