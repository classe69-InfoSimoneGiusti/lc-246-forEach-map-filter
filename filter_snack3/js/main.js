const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  ];


const mammiferi = animali.filter( (animale) => {
    if (animale.classe == "mammiferi") {
        return true;
    } else {
        return false;
    }
});

const mammiferiAvanzato = animali.filter(animale => animale.classe=="mammiferi"?true:false);

console.log(mammiferi);
console.log(mammiferiAvanzato);