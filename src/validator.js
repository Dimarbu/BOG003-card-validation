const validator = {
  // Sera la encargada de verificar que el numero de tarjeta sea valido segun el algoritmo de luhn
    isValid: (creditCardNumber) => {
      let reversed = (creditCardNumber.split("").reverse())
      let numPar = 0;
      let numImpar = 0;
      let sum = 0;
      for (let i=0; i<reversed.length; i++) {
        //console.log(creditCardNumber[i]);
        if ((i % 2) == 1) {
          numPar = parseInt(reversed[i]) * 2;
          if (numPar >= 10) {
            numPar = (numPar - 10) + 1;
          }
          sum += numPar;
        } else {
          numImpar = parseInt(reversed[i]);
          sum += numImpar;
        }
      }
      //console.log("numero es"+ sum);
      if (sum % 10 == 0) {
        return true;
      }
      else {
        return false;
      }
      //console.log();
    }
  }
  export default validator;
