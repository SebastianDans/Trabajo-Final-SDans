/* CONTROLES DE VIDEO */

let video=document.querySelector("#video");

console.dir(video)

const playvideo=()=>{
  video.play();
}

const pausevideo=()=>{
  video.pause();
}


/* JUEGO */

function jugar(){
  /* variable imagenes */
  var imagenes=document.querySelectorAll('.contenedor13 img');

  imagenj1.addEventListener('dragstart', arrastrado);
  imagenj2.addEventListener('dragstart', arrastrado);
  imagenj3.addEventListener('dragstart', arrastrado);

  soltar1=document.getElementById('caja1');
  soltar1.addEventListener('dragover', prevenirDefault);
  soltar1.addEventListener('drop', soltarelemento);

  soltar2=document.getElementById('caja2');
  soltar2.addEventListener('dragover', prevenirDefault);
  soltar2.addEventListener('drop', soltarelemento);

  soltar3=document.getElementById('caja3');
  soltar3.addEventListener('dragover', prevenirDefault);
  soltar3.addEventListener('drop', soltarelemento);
}

function arrastrado(evento){
  elemento=evento.target;
  evento.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

function soltarelemento(evento){
  console.log(evento)
  let id=evento.dataTransfer.getData('Text');
  let imagen=document.getElementById(id);
  imagen.style.display= 'none';
  evento.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="280px">';
}

function prevenirDefault(evento) {
  evento.preventDefault()
}

/* para que inicie el juego */
jugar()

/* para reiniciar el juego */
function reiniciar() {
window.location.reload();
}
