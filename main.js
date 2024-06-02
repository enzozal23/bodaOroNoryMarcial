// let sound = new Audio("./maluma.mp3");
// let sound2 = new Audio("../malumaOgg.ogg");
// let sound3 = new Audio("./malumaOpus.opus");
const botonCelebracion = document.querySelector(".celebracion");
const botonCeremonia = document.querySelector(".ceremonia");
const botonDress = document.querySelector(".dressCode");
const contenedorDatos = document.querySelector(".fechaLugar");
const contenedorDatos2 = document.querySelector(".fechaLugar2");
const contenedorDatos3 = document.querySelector(".dressCode-container");
const botonCerrar = document.querySelector(".cerrar");
const botonCerrar2 = document.querySelector(".cerrar2");
const botonCerrar3 = document.querySelector(".cerrar3");
const musica = document.querySelector("#musica");
console.log(musica);
const botonConfirmar = document.querySelector(".whapp");




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
  contenedorDatos2.classList.add("activo");
});
console.log(contenedorDatos2);

botonCerrar2.addEventListener("click", (e) => {
  e.preventDefault();
  contenedorDatos2.classList.remove("activo");
});

botonDress.addEventListener("click", (e) => {
  e.preventDefault();
  contenedorDatos3.classList.add("activo");
});
botonCerrar3.addEventListener("click", (e) => {
  e.preventDefault();
  contenedorDatos3.classList.remove("activo");
});

