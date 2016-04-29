var socket = io();

socket.on('connect', function () {
	console.log('Connected to socket io server!');
});

socket.on('message', function (message) {
	console.log('New message:');
	console.log(message.text);

	var time=(moment.utc(message.timestamp));
	time.local();
	var timeString=time.format('h:mm a');

	jQuery('.message').append('<p><strong>'+timeString+':</strong> '+message.text+'<p>'); 
});


//Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		text:$message.val()
	})

	$message.val('');


});