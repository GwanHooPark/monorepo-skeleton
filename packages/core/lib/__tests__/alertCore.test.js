import { plusOne } from '../alertCore.js';
describe('core', () => {
	test('메시지', () => {
		const makeMsg = 'test';
		const result = 'test';
		expect(makeMsg).toBe(result);
	});
});
describe('plusone', () => {
	test('더하기', () => {
		expect(plusOne(1)).toBe(2);
	});
});
