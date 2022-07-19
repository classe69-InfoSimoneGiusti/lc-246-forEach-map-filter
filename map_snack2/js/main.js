const nomi = ['CIAO', 'MOnDO', 'hELLO', 'WoRlD'];

const nomiCapitalizzati = nomi.map( nome => {

    return nome.substring(0,1).toUpperCase() + nome.substring(1).toLocaleLowerCase();

});

console.log(nomiCapitalizzati);