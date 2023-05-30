//FUNCIÓN ENCRIPTAR
var btnEncriptar = document.getElementById('encriptar');
const restriccion = /[^a-z\s?]+/gm;
  /*La letra "e" es convertida para "enter"
 La letra "i" es convertida para "imes"
 "La letra "o" es convertida para "ober
 La letra "a" es convertida para "ai"
 La letra "u" es convertida para "ufat"*/
function encriptacion() {
   let texto = document.getElementById('parrafo').value;

   if (texto.length == 0) {
      document.getElementById('pantalla').innerHTML = "No se encontró ningún texto";
      muñeco.src = "img/muñeco.png";
      document.getElementById('botoncopiar').style.display = 'none';
   }
   else {
      let error = texto.match(restriccion);
      if (error == null) {
         let textoEncriptado = texto.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('o', 'ober').replaceAll('a', 'ai').replaceAll('u', 'ufat');
         document.getElementById('pantalla').innerHTML = textoEncriptado;
         document.getElementById('botoncopiar').style.display = 'flex';
         document.getElementById('parrafo').value = "";
      }
   }
}

btnEncriptar.addEventListener('click', encriptacion);

//FUNCION DESENCRIPTAR
var btnDesencriptar = document.getElementById('desencriptar');

function desencriptacion() {
   let texto = document.getElementById('parrafo').value;
   let muñeco = document.getElementById("muñeco");

   if (texto.length == 0) {
      document.getElementById('pantalla').innerHTML = "No se encontró ningún texto";
      muñeco.src = "img/muñeco.png";
      document.getElementById('botoncopiar').style.display = 'none';
   }
   else {
      let error = texto.match(restriccion);
      if (error == null) {
         let textoDesencriptado = texto.replaceAll('ufat', 'u').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('imes', 'i').replaceAll('enter', 'e');
         document.getElementById('pantalla').innerHTML = textoDesencriptado;
         document.getElementById('botoncopiar').style.display = 'flex';
         document.getElementById('parrafo').value = "";
      }
   }
}

btnDesencriptar.addEventListener('click', desencriptacion);

//FUNCION COPIAR
const copiador = document.getElementById('copiar');

function leer() {
   let texto = document.getElementById('pantalla').textContent;
   return texto;
}

async function copiar() {
   let txt = leer();
   await navigator.clipboard.writeText(txt);

   document.getElementById('copiar').style.color = "white"
   setTimeout(() => document.getElementById('copiar').textContent = "Copiar", 1000);
   setTimeout(() => document.getElementById('copiar').style.color = "black", 1000);
}

copiador.addEventListener('click', copiar);