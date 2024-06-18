
import { capitalizeFirstLetter, reverse } from "./main";
import { calculator} from "./calculator";
import { caesarCipher} from "./caesercipher";

test('hello --> Hello', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

// test('hello --> olleh', () => {
//     expect(reverse('hello')).toBe('olleh');
//   });

// test('calculator --> 29, 20, 100 and 5', () => {
//     expect(calculator.sumValues(25, 4)).toBe(29);

//   });

  test('caeser Cipher, hello -->khoor', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
  });
