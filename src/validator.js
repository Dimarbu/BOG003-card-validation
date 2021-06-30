const validator = {
  // ...
  isValid: (creditCardNumber) => {
    let numPar = 0;
    let numImpar = 0;
    let sum = 0;
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i % 2 == 0) {
        numPar = parseInt(creditCardNumber[i]) * 2;
        if (numPar >= 10) {
          numPar = (numPar - 10) + 1;
        }
        sum = numPar + sum;
      } else {
        numImpar = parseInt(creditCardNumber[i]);
        sum = numImpar + sum;
      }
      //console.log("numero es"+ sum);
    }
    if (sum % 10 == 0) {
      return true;
    }
    else {
      return false;
    }
    console.log();
  }
}
export default { validator, };
