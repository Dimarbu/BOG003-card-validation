const validator = {
  // ...
  isvalid: (creditCardNumber) => {
    let sum = 0;
    let multiply = 0;
    for (let i = 0;i < creditCardNumber.lenght;i++){
      if (i % 2 === 0) {
        //....
        multiply = (creditCardNumber[i] - '0');
      }
      else {
        //Multiplicar if *2
        multiply = (creditCardNumber[i] - '0') * 2;
        if (multiply >= 10) {
          multiply = (multiply - 10) + 1;
        }
      }
      sum += multiply;
    }
    if (sum % 10 === 0) {
      return true;
    }
    else {
      return false;
    }
  },

};
export default { validator, };
