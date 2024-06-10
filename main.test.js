
import { capitalizeFirstLetter, reverse } from "./main";
import { calculator} from "./calculator";

test('hello --> Hello', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

test('hello --> olleh', () => {
    expect(reverse('hello')).toBe('olleh');
  });

test('calculator --> 29, 20, 100 and 5', () => {
    expect(calculator.sumValues(25, 4)).toBe(29);
    
  });

  // " sum: " + calculator.sumValues(25, 4) +
  // " sub: " + calculator.subtractionValues(25, 5) +
  // " mul: " + calculator.multiplyValues(25, 4) +
  // " div: " + calculator.divisionValues(25, 5)
