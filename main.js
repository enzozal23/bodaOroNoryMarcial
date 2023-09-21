// let sound = new Audio("./maluma.mp3");
// let sound2 = new Audio("../malumaOgg.ogg");
// let sound3 = new Audio("./malumaOpus.opus");
const botonCelebracion = document.querySelector(".celebracion");
const botonCeremonia = document.querySelector(".ceremonia");
const contenedorDatos = document.querySelector(".fechaLugar");
const contenedorDatos2 = document.querySelector(".fechaLugar2");
const botonCerrar = document.querySelector(".cerrar");
const botonCerrar2 = document.querySelector(".cerrar2");
const musica = document.querySelector(".musica");
console.log(musica);

// botonCelebracion.addEventListener("click", (e) => {
//   e.preventDefault();
//   contenedorDatos.classList.add("activo");
// });

window.addEventListener("click", (e) => {
  e.preventDefault();
  musica.outerHTML =
    '<audio src="./Maluma.mp3" autoplay="" controls="" class="musica"></audio>';
});

botonCerrar.addEventListener("click", (e) => {
  e.preventDefault();
  contenedorDatos.classList.remove("activo");
});

botonCeremonia.addEventListener("click", (e) => {
  e.preventDefault();
  contenedorDatos2.classList.add("active");
});
console.log(contenedorDatos2);

botonCerrar2.addEventListener("click", (e) => {
  e.preventDefault();
  contenedorDatos2.classList.remove("active");
});
