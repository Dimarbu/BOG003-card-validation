const validator = {
  // ...
};

const compras = function () {
  document.getElementById('Bienvenida').style.display = 'none';
  document.getElementById('card').removeAttribute ('hidden');
  document.getElementById('card').style.display = 'block';
}

export default {validator, compras};
