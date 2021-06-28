const validator = {
  // ...
};

const compras = function () {
  document.getElementById('Bienvenida').style.display = 'none';
  document.getElementById('card').removeAttribute ('hidden');
  document.getElementById('card').style.display = 'block';
}

const behind = function() {
  document.getElementById('card').style.display = 'none';
  document.getElementById('Bienvenida').style.display = 'block';
}
const validateOk = function() {
  document.getElementById('card').style.display ='none';
  document.getElementById('payOk').removeAttribute ('hidden');
  document.getElementById('payOk').style.display ='block';
}
const behind2 = function() {
  document.getElementById('payOk').style.display = 'none';
  document.getElementById('Bienvenida').style.display = 'block';
}
export default {validator, compras, behind, validateOk, behind2};
