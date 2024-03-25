/*
SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.
*/

const vipPrenot = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

const placeHolderVIP = [];
console.log(placeHolderVIP);

vipPrenot.forEach((element, index)=> {
    let objectVIP =
    {
        tableName: 'VIP table',
        guestName: element,
        place: index
    }
    console.log(objectVIP);
    placeHolderVIP.push(objectVIP);
});

/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Buon pomeriggio e buon lavoro !!! :faccia_nerd:
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
Buon lavoro e Buon weekeend !
*/

const facultyStud = [

    {
        name: 'Marco della Rovere',
        grades: '78',
        id: '213'
    },

    {
        name: 'Paola Cortellessa',
        grades: '96',
        id: '110'
    },

    {
        name: 'Andrea Mantegna',
        grades: '48',
        id: '250'
    },

    {
        name: 'Gaia Borromini',
        grades: '74',
        id: '145'
    },

    {
        name: 'Luigi Grimaldello',
        grades: '68',
        id: '196'
    },

    {
        name: 'Piero della Francesca',
        grades: '50',
        id: '102'
    },

    {
        name: 'Francesca da Polenta',
        grades: '84',
        id: '120'
    }

]

const studentClass = facultyStud.map((el) => {
    return el.name.toUpperCase();
});

console.log(studentClass);

const voteAbove70 = facultyStud.filter((element) => {
    return element.grades > 70;
});

console.log(voteAbove70);

const voteAbove70Above120 = facultyStud.filter((elem) => {
    return elem.grades > 70 && elem.id < 120;
});

console.log(voteAbove70Above120);

/*
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

let bicycle = [
    { nome: "Bici1", peso: 10 },
    { nome: "Bici2", peso: 12 },
    { nome: "Bici3", peso: 9 },
    { nome: "Bici4", peso: 14 },
    { nome: "Bici5", peso: 13 },
    { nome: "Bici6", peso: 11 },
    { nome: "Bici7", peso: 15 },
    { nome: "Bici8", peso: 10 },
    { nome: "Bici9", peso: 12 },
    { nome: "Bici10", peso: 14 }
];

let bicycleDec = [...bicycle];
console.log(bicycleDec);

bicycleDec.filter((el) => {
    if(el.peso < bicycleDec[0].peso) {
        console.log(`La bici con peso minore è ${el.nome}`);
    }
});
