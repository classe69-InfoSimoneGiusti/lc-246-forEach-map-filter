const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  ];

// approccio "tradizionale"
const mammiferi = animali.filter( (animale) => {
    if (animale.classe == "mammiferi") {
        return true;
    } else {
        return false;
    }
});


// con uso avanzato di arrow function ed operatori ternari
const mammiferiAvanzato = animali.filter(animale => animale.classe=="mammiferi");

console.log(mammiferi);
console.log(mammiferiAvanzato);