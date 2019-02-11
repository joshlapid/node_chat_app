const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		const from = 'Bob';
		const text = 'Some Message';

		const message = generateMessage(from, text);

		expect(typeof message.createdAt).toBe('number');
		expect(message.from).toBe('Bob');
		expect(message.text).toBe('Some Message');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		const from = 'User';
		const lat = 1;
		const long = 2;
		const url = `https://www.google.com/maps?q=1,2`;

		const locationMessage = generateLocationMessage(from, lat, long);

		expect(typeof locationMessage.createdAt).toBe('number');
		expect(locationMessage.from).toBe('User');
		expect(locationMessage).toMatchObject({from, url});
	});
});