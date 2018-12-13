const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		const from = 'Art';
		const text = 'Hi, there!';
		const res = generateMessage(from, text);

		expect(res).toMatchObject({ from, text });
		expect(typeof res.createdAt).toBe('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		const from = 'Art';
		const latitude = 123.1231;
		const longitude = 321.3213;
		const url = `https://www.google.com/maps?q=123.1231,321.3213`;
		const res = generateLocationMessage(from, latitude, longitude);

		expect(res).toMatchObject({ from, url });
		expect(typeof res.createdAt).toBe('number');
	});
});
