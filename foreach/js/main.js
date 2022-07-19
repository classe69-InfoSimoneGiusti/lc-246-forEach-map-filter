/* Recap per creare una arrow function 

//funzione anonima "normale"
function () {

}

//arrow function
() => {

}

*/



//primi passi
const studenti = ['mario', 'giuseppe', 'rossana', 'pippo'];



// approccio tradizionale 
for (let i = 0; i < studenti.length; i++) {
    console.log(studenti[i]);
}

// approcio con forEach

studenti.forEach((elemento, indice) => { 
    console.log(elemento);
} );


//uso avanzato delle arrow function
studenti.forEach( e => console.log(e) );









//altro esempio
const automobili =  [
                        {
                            marca: 'Fiat',
                            modello: 'Panda'
                        },
                        {
                            marca: 'Suzuki',
                            modello: 'Swift'
                        },
                    ];

automobili.forEach( automobile => {
    console.log(automobile['marca']);
} )




//altro esempio
const pizze =   [
                    {
                        nome: 'margherita',
                        prezzo: 6
                    },
                    {
                        nome: '4 stagioni',
                        prezzo: 8
                    },
                    {
                        nome: 'marinara',
                        prezzo: 5
                    }
                ];

// con metodo tradizionale
for (let i = 0; i < pizze.length; i++) {
    console.log(pizze[i].nome, pizze[i].prezzo);
}

//con una arrow function
pizze.forEach( (pizza, posizione) => {
    console.log(pizza);
} ); 


// con una funzione di callback
pizze.forEach( stampaPizza ); //devo solo mettere il nome della funzione, non devo specificare le parentesi (altrimenti la invoco e non va bene!)


/* Costruisco una funzione che mi consenta di stampare un oggetto fatto cosi: */


/* pizza, deve essere un oggetto fatto cosi: 

{
    nome: 'nome della pizza',
    prezzo: 'prezzo della pizza'
}
*/

/* se funziona invocandola manualmente, funziona anche come callback di una funzione! /*
const miaPizza =    {
                        nome: 'pizza con ananas',
                        prezzo: 12
                    };

stampaPizza(miaPizza);

function stampaPizza(pizza) {
    console.log(pizza.nome, pizza.prezzo);
}


 












const voli = 
[

    {
        partenza: 'firenze',
        destinazione: 'parigi'
    },

    {
        partenza: 'pisa',
        destinazione: 'roma'
    },

    {
        partenza: 'pisa',
        destinazione: 'budapest'
    }

];


voli.forEach( (volo, indice) => {
    console.log(volo.partenza, volo.destinazione);
})









const numeri = [2,3,5,7,9,11,20];

numeri.forEach( (numero) => {
    console.log(numero);
} )




