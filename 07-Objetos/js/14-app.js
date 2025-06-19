// Agrupa datos en JavaScript utilizando Object.groupBy

const numeros = [1, 2, 3, 4, 5, 6];

// Antigua forma sin Object.groupBy
let grouped = {
    impar: [],
    par: []
}

numeros.forEach((numero) => {
    if (numero % 2 === 0) {
        grouped.par.push(numero);
    } else {
        grouped.impar.push(numero);
    }
});

console.log(grouped);

/*
    agrupado : {
        impar: [1, 3, 5],
        par: [2, 4, 6]
    }
 */

// Nuevo metodo groupBy
const grouped2 = Object.groupBy(
    numeros,
    (numero) => {
        if (numero % 2 === 0) return 'par';
        return 'impar';
    }
);

console.log(grouped2);

/* { 
    par: [2, 4, 6], 
    impar: [1, 3, 5] 
} */


// Otro ejemplo
const wizards = ['Harry', 'Hermaione', 'Ron', 'Snape', 'Dumbledore'];

const agruparPorPrimeraLetra = Object.groupBy(
    wizards,
    (wizards) => wizards[0]
);

console.log(agruparPorPrimeraLetra);

/* { 
    H: ['Harry', 'Hermione'], 
    R: ['Ron'], 
    S: ['Snape'], 
    D: ['Dumbledore'] 
} */


// Con objetos
const avengers = [
    { name: 'Iron Man', powerLevel: 500 },
    { name: 'Hulk', powerLevel: 9000 },
    { name: 'Thor', powerLevel: 4500 },
    { name: 'Captain America', powerLevel: 2000 },
    { name: 'Black Widow', powerLevel: 9999 },
];

const groupedByPowerLevel = Object.groupBy(
    avengers,
    (avenger) => {
        if (avenger.powerLevel <= 500) return 'alpha'
        if (avenger.powerLevel <= 5000) return 'beta'
        return 'omega'
    }
);

console.log(groupedByPowerLevel);

/* {
    "alpha": [{ "name": "Iron Man", "powerLevel": 500 }],
    "omega": [{ "name": "Hulk", "powerLevel": 9000 }, { "name": "Black Widow", "powerLevel": 9999 }],
    "beta": [{ "name": "Thor", "powerLevel": 4500 }, { "name": "Captain America", "powerLevel": 2000 }]
} */