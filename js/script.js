

var kmDaPercorrere = parseInt(prompt("Quanti km devi percorrere?"));
var prezzoAlKm = 0.21;
var prezzoBigliettoNormale = kmDaPercorrere * prezzoAlKm;

console.log(prezzoBigliettoNormale)

var etaUtente = parseInt(prompt("Quanti anni hai?"))

if (etaUtente < 18) {
    document.getElementById("biglietto_treno").innerHTML = "Il tuo biglietto costa " + ((prezzoBigliettoNormale / 100) * 80) + " euro"
}
else if (etaUtente > 65) {
    document.getElementById("biglietto_treno").innerHTML = "Il tuo biglietto costa " + ((prezzoBigliettoNormale / 100) * 60) + " euro"
}
else {
    document.getElementById("biglietto_treno").innerHTML = "Il tuo biglietto costa " + prezzoBigliettoNormale + " euro"
}
