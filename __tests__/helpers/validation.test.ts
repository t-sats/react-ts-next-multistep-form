import { validateEmail, validateAge, validateName } from '@/helpers/validation';
test('check correct email value', () => {
  expect(validateEmail('test@test.com')).toBe(true);
});

test('check incorrect email value', () => {
  expect(validateEmail('test@')).toBe(false);
});

test('check correct age value', () => {
  expect(validateAge(1)).toBe(true);
});

test('check incorrect age value', () => {
  expect(validateAge(0)).toBe(false);
});

test('check correct name value', () => {
  expect(validateName('test')).toBe(true);
});

test('check incorrect name value', () => {
  expect(validateName('t')).toBe(false);
});
