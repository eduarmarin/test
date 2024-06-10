const calculator = {
    sumValues: function (num1, num2) {
     let sum = num1 + num2;
     return sum
    },
    subtractionValues: function (num1, num2) {
      let sub = num1 - num2;
      return sub
    },
    multiplyValues: function (num1, num2) {
      let mul = num1 * num2;
      return mul
    },
    divisionValues: function (num1, num2) {
      let div = num1 / num2;
      return div
    },
};   

console.log(
  " sum: " + calculator.sumValues(25, 4) +
  " sub: " + calculator.subtractionValues(25, 5) +
  " mul: " + calculator.multiplyValues(25, 4) +
  " div: " + calculator.divisionValues(25, 5)
);

//export {calculator}