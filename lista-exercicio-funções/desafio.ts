function isPrimo(n1:number, div:number=2):boolean{

    if (n1 % div == 0) {
        return n1 == div;
    }
    
    if (div*div > n1){
        return true;
    }

    return isPrimo(n1, div+1)
}

function listarNumerosPrimos(n1:number=2, limite:number=100): void {

    if (isPrimo(n1))  {
        console.log(n1);
    }
}
