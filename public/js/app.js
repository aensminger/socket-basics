var name=getQueryVariable("name") || 'Anonymous';
var room=getQueryVariable("room");

var socket = io();

console.log(name+' joined the room: '+room);


socket.on('connect', function () {
	console.log('Connected to socket io server!');
});

socket.on('message', function (message) {
	var time=(moment.utc(message.timestamp));
	time.local();

	var $message=jQuery('.message');
	var timeString=time.format('h:mm a');

	$message.append('<p><strong>'+message.name+' '+timeString+':</strong><p>');
	$message.append('<p>'+message.text+'</p>');
});


//Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		name: name,
		text:$message.val()

	})

	$message.val('');


});