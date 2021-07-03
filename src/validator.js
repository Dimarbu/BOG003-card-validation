const validator = {
  // Sera la encargada de verificar que el numero de tarjeta sea valido segun el algoritmo de luhn
  isValid: (creditCardNumber) => {
    let reversed = (creditCardNumber.split("").reverse())
    let numPar = 0;
    let numImpar = 0;
    let sum = 0;
    for (let i = 0; i < reversed.length; i++) {
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
    } else {
      return false;
    }
    //console.log();
  },
  maskify: (creditCardNumber) => {
   let selectNumber = creditCardNumber.length;
   let maskingNumber = "";
   for(let i = 0; i<selectNumber-4; i++) {
   maskingNumber += "#";
    }
    return maskingNumber + creditCardNumber.substring(selectNumber-4,selectNumber) 

  }
 /* maskify: (creditCardNumber) => {
    if (creditCardNumber.length <= 6) return creditCardNumber;
    const lastFour = creditCardNumber.substr(-4);
    const maskingNumber = creditCardNumber.substr(1, creditCardNumber.length - 5).replace(/\d/g, '*');
    return `${maskingNumber}${lastFour}`;
  }*/
}



export default validator;
