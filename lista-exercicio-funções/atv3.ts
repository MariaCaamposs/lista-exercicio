/*
Crie uma função que recebe por parâmetro 
o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
*/

function volume(raio) {
    var pi = 3.14;
    var valorV = (4 / 3 * pi * (valorR * valorR * valorR));
    console.log("o resultado \u00E9 ".concat(valorV));
}
 
var teclado = require("prompt-sync")();
var valorV = parseInt(teclado("digite o valor do volume: "));
var valorV = (teclado("de um valor para o raio: "));
volume(valorV);

