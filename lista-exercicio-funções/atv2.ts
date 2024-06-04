/*
Crie uma função que receba 3 números como parâmetro
 e retorne o MENOR dentre eles.
 */

function maisOumenos (n1:number, n2:number, n3:number): number{
   let menorN: number=0;
   if(n1<n2 && n1<n3){menorN=n1}
   else if(n2<n1 && n2<n3){menorN=n3}
   return menorN;
}

const teclado=require(`prompt-sync`)();

let num1: number = parseInt(teclado(`digite o primeiro numero:`));
let num2: number =parseInt(teclado(`digite o segundo numero:`));
let num3: number = parseInt(teclado(`digite o terceiro numero:`));

console.log(`o menor numero é ${maisOumenos(num1,num2,num3)}`);
