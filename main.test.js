
import { capitalizeFirstLetter, reverse } from "./main";

test('hello --> Hello', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

test('hello --> olleh', () => {
    expect(reverse('hello')).toBe('olleh');
  });