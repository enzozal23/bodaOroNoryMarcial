let sound = new Audio("./maluma.mp3");
let sound2 = new Audio("./malumaOgg.ogg");
let sound3 = new Audio("./malumaOpus.opus");
const botonCelebracion = document.querySelector(".celebracion");
const botonCeremonia = document.querySelector(".ceremonia");
const contenedorDatos = document.querySelector(".fechaLugar");
const contenedorDatos2 = document.querySelector(".fechaLugar2");
const botonCerrar = document.querySelector(".cerrar");
const botonCerrar2 = document.querySelector(".cerrar2");

botonCelebracion.addEventListener("click", (e) => {
  e.preventDefault();
  contenedorDatos.classList.add("activo");
});

botonCerrar.addEventListener("click", (e) => {
  e.preventDefault();
  contenedorDatos.classList.remove("activo");
});

botonCeremonia.addEventListener("click", (e) => {
  e.preventDefault();
  contenedorDatos2.classList.add("active");
  sound.play;
  sound2.play;
  sound3.play;
});
console.log(contenedorDatos2);

botonCerrar2.addEventListener("click", (e) => {
  e.preventDefault();
  contenedorDatos2.classList.remove("active");
});

function playAudio(params) {
  sound.play;
  sound2.play;
  sound3.play;
}

playAudio();
