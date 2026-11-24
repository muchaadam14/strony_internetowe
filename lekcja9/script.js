"use strict";

let counter = 0;

function addPoint() {
    counter = counter + 1;
    document.getElementById("counter-display").textContent = counter;
}

function resetCounter() {
    counter = 0;
    document.getElementById("counter-display").textContent = counter;   
}

function subPoint() {
    counter = counter - 1;
    document.getElementById("counter-display").textContent = counter;   
}

let items = ["Programista interfejsów użytkownika", "Programista systemów serwerowych", "Programista aplikacji mobilnych", "Inżynier ds. wdrażania i utrzymania systemów", "Inżynier sztucznej inteligencji i uczenia maszynowego", "Programista gier", "Inżynier automatyzacji testów", "Programista systemów wbudowanych"];
// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
function drawItem() {
    let index = Math.floor(Math.random() * items.length)
    document.getElementById("random-display").textContent = items[index];
}

function changeBackground() {
    let colors = ["#1a1a2e", "#899091"];
    let index = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[index];
}