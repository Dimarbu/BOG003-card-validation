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
  //Valida que no existan los campos vacios
  if(validaCampos()){
    alert("Por favor revisar que no existan campos vacíos");
  }
  //Al no encontrar campos vacíos realiza las funciones de validar tarjeta y enmascarar 
  else{
    let creditCardNumber = document.getElementById("numCard").value;
  //genera un consecutivo aleatorio como comprobante de pago  
    document.getElementById("voucher").innerHTML = Math.floor(Math.random() * 100);
    const validacionTarjeta = tarjetaValida(creditCardNumber);
  //llama la funcion de enmascarar tarjeta
    if (validacionTarjeta) {
      tarjetaMaskify(creditCardNumber);
    }
  }
});
//Funcion de validar campos vacios
function validaCampos(){
  let dataName = document.getElementById("name").value;
  let creditCardNumber = document.getElementById("numCard").value;
 if(dataName.length == 0 || creditCardNumber.length == 0){
   return true; 
 }
   else {
   return false;
   }
}
// Funcion para validar el numero de la tarjeta y enviar a la tercera pagina
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
//funcion de enmascarar numero de tarjeta 
function tarjetaMaskify(creditCardNumber) {
  document.getElementById("dataCard").innerHTML = validator.maskify(creditCardNumber);
}
//Funcion del boton regresar tercera pantalla
document.getElementById("behind2").addEventListener("click", () => {
  document.getElementById('payOk').style.display = 'none';
  document.getElementById('Bienvenida').style.display = 'block';
  document.getElementById('Bienvenida2').style.display = 'block';
});

//console.log(validator);
