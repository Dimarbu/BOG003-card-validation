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

const compras = function () {
  document.getElementById('Bienvenida').style.display = 'none';
  document.getElementById('card').removeAttribute('hidden');
  document.getElementById('card').style.display = 'block';
}

const behind = function () {
  document.getElementById('card').style.display = 'none';
  document.getElementById('Bienvenida').style.display = 'block';
}
const validateOk = function () {
  document.getElementById('card').style.display = 'none';
  document.getElementById('payOk').removeAttribute('hidden');
  document.getElementById('payOk').style.display = 'block';
}
const behind2 = function () {
  document.getElementById('payOk').style.display = 'none';
  document.getElementById('Bienvenida').style.display = 'block';
}


export default { validator, compras, behind, validateOk, behind2 };
