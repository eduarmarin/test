
import { capitalizeFirstLetter, reverse } from "./main";
import { calculator} from "./calculator";
import { caesarCipher} from "./caesercipher";
import { analyzed } from "./analyzed.js";

test('hello --> Hello', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

// test('hello --> olleh', () => {
//     expect(reverse('hello')).toBe('olleh');
//   });

// test('calculator --> 29, 20, 100 and 5', () => {
//     expect(calculator.sumValues(25, 4)).toBe(29);

//   });

// test('caeser Cipher, hello -->khoor', () => {
//   expect(caesarCipher('hello', 3)).toBe('khoor');
// });

test('analysed array average: 4, min: 1, max: 8, length: 6', () => {
  expect(analyzed([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
 });
});
