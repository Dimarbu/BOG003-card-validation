import validator from './validator.js';

//Funcion del boton comprar
/*function button{
    document.getElementById('Bienvenida').style.display = 'none';
    document.getElementById('card').removeAttribute ('hidden');
    document.getElementById('card').style.display = 'block';
    }*/

//Funcion del boton comprar audifonos
    document.getElementById("bttn").addEventListener("click",()=>{
        validator.compras();
    });

//Funcion del boton comprar cámara
    document.getElementById("bttn2").addEventListener("click",()=>{
        validator.compras();
    });

//  Funcion del boton regresar segunda pantalla
    document.getElementById("behind").addEventListener("click",()=>{
        validator.behind();
    });    

//Funcion del boton validar pago
    document.getElementById("validateOk").addEventListener("click",()=>{
       validator.validateOk();
       
    });   
//Funcion del boton regresar tercera pantalla
    document.getElementById("payOk").addEventListener("click",()=>{
       validator.behind2();
    });

console.log(validator);
