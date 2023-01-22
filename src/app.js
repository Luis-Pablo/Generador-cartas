/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  random(pinta(), numero());
};
const numeros = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const pintas = ["♦", "♥", "♠", "♣"];
let numero = () => {
  let random = Math.floor(Math.random() * numeros.length);
  return numeros[random];
};
let pinta = () => {
  let random = Math.floor(Math.random() * pintas.length);
  return pintas[random];
};

let pinta1 = document.querySelector(".pinta1");
let pinta2 = document.querySelector(".pinta2");
let numeroDiv = document.querySelector(".numero1");

let random = (pin, num) => {
  pinta1.innerHTML = pin;
  pinta2.innerHTML = pin;
  numeroDiv.innerHTML = num;
};
setInterval(random(pinta(), numero()), 5000);
const boton = document.querySelector(".boton");
boton.addEventListener("click", () => {
  random(pinta(), numero());
});
