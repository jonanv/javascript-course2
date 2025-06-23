// De Callback Hell a Promises
const paises = [];

const nuevoPais = (pais) => new Promise((resolve, _) => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`);
    }, 3000);
});

function mostrarPaises() {
    console.log(paises);
}

nuevoPais('Alemania')
    .then((response) => {
        console.log(response);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then((response) => {
        console.log(response);
        console.log(paises);
        return nuevoPais('Inglaterra');
    })
    .then((response) => {
        console.log(response);
        console.log(paises);
    });