/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  random();
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
const pintas = ["\u2666", "\u2665", "\u2660", "\u2663"]; //["♦", "♥", "♠", "♣"];
let numero = () => {
  let random = Math.floor(Math.random() * numeros.length);
  return numeros[random];
};
let pinta = () => {
  let random = Math.floor(Math.random() * pintas.length);
  return pintas[random];
};
//let imprimirPinta = pinta();
let pinta1 = document.querySelector(".pinta1");
let pinta2 = document.querySelector(".pinta2");
let numeroDiv = document.querySelector(".numero1");

let random = () => {
  pinta1.innerHTML = pinta();
  pinta2.innerHTML = pinta();
  numeroDiv.innerHTML = numero();
};
setInterval(random, 5000);
const boton = document.querySelector(".boton");
boton.addEventListener("click", () => {
  random();
});
