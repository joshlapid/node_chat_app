const expect = require('expect');
const {isRealString} = require('./validation');

// import isRealString

describe('isRealString', () => {
	it('should reject non-string values', () => {
		const stringInput = true;
		expect(isRealString(stringInput)).toBe(false);
	});

	it('should reject string with only spaces', () => {
		const stringInput = '    ';
		expect(isRealString(stringInput)).toBe(false);
	});

	it('should allow string with non-space characters', () => {
		const stringInput = '  user1abc  ';
		expect(isRealString(stringInput)).toBe(true);
	});
});

