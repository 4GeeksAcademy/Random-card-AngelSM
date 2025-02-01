/* eslint-disable */
import "bootstrap";
import "./style.css";

const palos = ["♦", "♥", "♠", "♣"];
const number = [
  "A",
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
function generarCartas() {
  // primero agrego dos constantes con el palo, y el calor de las cartas
  let Palo = palos[Math.floor(Math.random() * palos.length)]; //creo la función para generar un aplo aleatorio con los simbolos
  let valor = Math.floor(Math.random() * number.length); //así tambien creo un numero entre 1 y 12 para el valro del la carta
  // aqui creo que me falta un return papra que la función me retorne algo pero nose si poner que me retorne palo y valor

  document.querySelector(".cardHeader").textContent = Palo;
  document.querySelector(".cardBody").textContent = valor;
  document.querySelector(".cardFooter").textContent = Palo;
  //aqui creo dentr de los divs del header,y boddy el return de palo y valor y debajo lo que hago es un if else para que, siempre que los palos sean corazon o diamante sean rojos
  if (Palo === "♥" || Palo === "♦") {
    document.querySelector(".cardHeader").style.color = "red";
    document.querySelector(".cardFooter").style.color = "red";
  } else {
    document.querySelector(".cardHeader").style.color = "black";
    document.querySelector(".cardFooter").style.color = "black";
  }
}
window.onload = generarCartas; //la funcion se aplica cuando se carga la pagina

document.querySelector("#boton").addEventListener("click", generarCartas); //y aqui quise repasar un poco los addevenlistener y puse que se ejecutara la funcion cuando le diera click al botón.
