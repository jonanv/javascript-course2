// Explicit binding
// Es posible invocar una función con un contexto específico utilizando call, apply o bind

function persona(elment1, element2) {
    console.log(`Mi nombre es ${ this.nombre } y escucho ${ elment1 } y ${ element2 }`);
}

const informacion = {
    nombre: 'Juan'
}

const musicaFavorita = ['Heavy Metal', 'Rock'];

// call
// Se le tiene que pasar cada elemento individual
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

// apply
// Puede tomar un arreglo
persona.apply(informacion, musicaFavorita);

// bind
// Crear una nueva funcion que es muy parecida a call con los mismos parametros
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();