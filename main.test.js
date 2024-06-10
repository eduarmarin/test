//const capitalizeFirstLetter = require('./capitalizeFirstLetter')
import { capitalizeFirstLetter } from "./main";

test('hello --> Hello', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });