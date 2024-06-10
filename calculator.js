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

       calculator.sumValues(25, 4);
       calculator.sumValues(45, 4);
       calculator.subtractionValues(20, 5);
       calculator.multiplyValues(5, 6);
       calculator.divisionValues(45, 5);
       console.log(calculator.sumValues(25, 4));