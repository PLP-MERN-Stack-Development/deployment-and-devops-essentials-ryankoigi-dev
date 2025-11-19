import { validateBug } from '../utils/validateBug.js';




test('validateBug returns errors for invalid input', () => {
const res = validateBug({ title: 'ab', description: '123' });
expect(res.valid).toBe(false);
expect(res.errors.length).toBeGreaterThan(0);
});




test('validateBug passes for correct input', () => {
const res = validateBug({ title: 'Valid title', description: 'A decent description' });
expect(res.valid).toBe(true);
expect(res.errors.length).toBe(0);
});
