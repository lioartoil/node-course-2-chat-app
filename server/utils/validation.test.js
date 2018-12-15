const expect = require('expect');

// import isRealString
const { isRealString } = require('./validation');

// isRealString
// should reject non-string values
// should reject string with only spaces
// should allow string with non-space characters
describe('isRealString', () => {
	it('should reject non-string values', () => {
		const str = { name: 'Art' };
		const res = isRealString(str);

		expect(res).toBe(false);
	});

	it('should reject string with only spaces', () => {
		const str = '  ';
		const res = isRealString(str);

		expect(res).toBe(false);
	});

	it('should allow string with non-space characters', () => {
		const str = 'Art';
		const res = isRealString(str);

		expect(res).toBe(true);
	});
});
