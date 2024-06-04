
/*
Faça uma função que recebe um valor inteiro e verifica se o valor é par.
 A unção deve retornar
1 se o número for par e 0 se for ímpar.
*/

function listNprimo(n1,ultimo){
    if (n1 === void 0) {n1 = 2; }
    if (ultimo === void 0) {ultimo = 1000;}
    if (listNprimo(n1)){
        console.log(n1);
    }
}
function nPrimo(n1, divi){
    if (divi ===void 0){ divi = 2;}
    if (n1 % divi == 0 ){
        return n1== divi;
    }
    if (divi * divi > n1){
        return true;
    }
    return nPrimo(n1, divi + 1);
}

