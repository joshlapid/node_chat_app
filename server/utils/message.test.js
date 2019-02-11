const expect = require('expect');

const {generateMessage} = require('./message');

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