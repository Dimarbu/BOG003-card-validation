import validator from './validator.js';

//Funcion del boton comprar
/*function button{
    document.getElementById('Bienvenida').style.display = 'none';
    document.getElementById('card').removeAttribute ('hidden');
    document.getElementById('card').style.display = 'block';
    }*/

//Funcion del boton comprar audifonos
    document.getElementById("bttn").addEventListener("click",()=>{
        document.getElementById('Bienvenida').style.display = 'none';
        document.getElementById('card').removeAttribute ('hidden');
        document.getElementById('card').style.display = 'block';
    })

    //Funcion del boton comprar cámara
    document.getElementById("bttn2").addEventListener("click",()=>{
        document.getElementById("Bienvenida").style.display = "none";
        document.getElementById("card").removeAttribute ("hidden");
        document.getElementById("card").style.display = "block";
    })



console.log(validator);
