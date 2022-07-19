const numeri = [2,3,5,6,7,9];




// approccio tradizionale
const numeriPari = [];

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 == 0) {
        numeriPari.push(numeri[i]);
    }
}

console.log(numeriPari);




// con la filter

const pari = numeri.filter( numero => {
    if (numero % 2 == 0) {
        return true; //importante, non devo ritornare il valore, ma solo true!
    }
    return false;
});

console.log(pari);





//altro esempio
const numeriDaFiltrare = [129, 782, 4, 2, 999, 100];


const numeriPiuGrandiDi100 = numeriDaFiltrare.filter( n => {
    if (n > 100) {
        return true;
    } else {
         return false;
    }
});

console.log(numeriPiuGrandiDi100);




//stessa soluzione con array function avanzata ed operatore ternario

const numeriPiuGrandiDi100Avanzato = numeriDaFiltrare.filter( n => n>100?true:false); //identico a quanto sopra!

console.log(numeriPiuGrandiDi100Avanzato);




