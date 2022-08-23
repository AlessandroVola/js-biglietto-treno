

var kmDaPercorrere = parseInt(prompt("Quanti km devi percorrere?"));
var prezzoAlKm = 0.21;
var prezzoBigliettoNormale = kmDaPercorrere * prezzoAlKm;

console.log(prezzoBigliettoNormale)


document.getElementById("biglietto_treno").innerHTML = "Il tuo biglietto costa " + prezzoBigliettoNormale + " euro"