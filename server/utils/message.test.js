var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'sapir';
		var text = 'Some message';
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,text});

	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'sapir';
		var latitude = 1;
		var longitude = 2;
		var url = 'http://www.google.com/maps?q=1,2';

		var message = generateLocationMessage(from, latitude, longitude);
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,url});
	});
});