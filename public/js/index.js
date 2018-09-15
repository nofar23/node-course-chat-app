var socket = io();

		socket.on('connect',function ()  {
			console.log('Connected to server');

			socket.emit('createMessage', {
				from: 'Nofar',
				text: 'Hey. This is Nofar.'
			});
		});

		socket.on('disconnect',function () {
           console.log('Disconnected from server');
		});

		socket.on('newMessage', function(message) {
			console.log('newMessage',message);
		});