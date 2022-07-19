const studenti = [ 
    'mario',
    'guido',
    'pippo'
];

/* approccio tradizionale */
const studentiSalutati = [];

for (let i = 0; i < studenti.length; i++) {
    studentiSalutati.push( "Ciao " + studenti[i] );
}

console.log(studentiSalutati);




/* approccio con la .map() */

const studentiSalutati2 = studenti.map( ( studente ) => 
    {
        return "Ciao " + studente;
    }   
);

console.log(studentiSalutati2);




// con uno avanzato delle array function

const studentiSalutati3 = studenti.map( stud => "Ciao " + stud );

console.log(studentiSalutati3);




//esempio reale
const citta = ['MIlano', 'ROMa', 'gEnOva', 'torINO']; // => MILANO, ROMA, GENOVA, TORINO , si può usare la toUpperString() sulle stringhe

//con uso avanzato delle array function
const cittaInMaiuscolo = citta.map( cittaCorrente => cittaCorrente.toUpperCase() );

console.log(cittaInMaiuscolo);