import validator from './validator.js';

//Funcion del boton comprar
/*function button{
    document.getElementById('Bienvenida').style.display = 'none';
    document.getElementById('card').removeAttribute ('hidden');
    document.getElementById('card').style.display = 'block';
    }*/

//Funcion del boton comprar audifonos
document.getElementById("bttn").addEventListener("click", () => {
  document.getElementById('Bienvenida').style.display = 'none';
  document.getElementById('Bienvenida2').style.display = 'none';
  document.getElementById('card').removeAttribute('hidden');
  document.getElementById('card').style.display = 'block';
});

//Funcion del boton comprar cámara
document.getElementById("bttn2").addEventListener("click", () => {
  document.getElementById('Bienvenida').style.display = 'none';
  document.getElementById('Bienvenida2').style.display = 'none';
  document.getElementById('card').removeAttribute('hidden');
  document.getElementById('card').style.display = 'block';
});

//  Funcion del boton regresar de la segunda pantalla a la primera
document.getElementById("behind").addEventListener("click", () => {
  document.getElementById('card').style.display = 'none';
  document.getElementById('Bienvenida').style.display = 'block';
  document.getElementById('Bienvenida2').style.display = 'block';
});

//Funcion del boton validar pago en la segunda pantalla
document.getElementById("validateOk").addEventListener("click", () => {
  let creditCardNumber = document.getElementById("numCard").value;
  //const validCard = validator.validator.isValid(creditCardNumber);
  const validacionTarjeta = tarjetaValida(creditCardNumber);
  if (validacionTarjeta) {
    tarjetaMaskify(creditCardNumber);
  }
});

function tarjetaMaskify(creditCardNumber) {
  document.getElementById("dataCard").innerHTML = validator.maskify(creditCardNumber);
}

function tarjetaValida(creditCardNumber) {
  let valid = validator.isValid(creditCardNumber);
  if (valid === true) {
    document.getElementById('card').style.display = 'none';
    document.getElementById('payOk').removeAttribute('hidden');
    document.getElementById('payOk').style.display = 'block';
    return true;
  } else {
    alert("Tarjeta invalida");
  }

}
//Funcion del boton regresar tercera pantalla
document.getElementById("behind2").addEventListener("click", () => {
  document.getElementById('payOk').style.display = 'none';
  document.getElementById('Bienvenida').style.display = 'block';
  document.getElementById('Bienvenida2').style.display = 'block';
});

//console.log(validator);
