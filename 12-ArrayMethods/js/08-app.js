// spread operator
// Sirve para expandir un arreglo o un objeto

// rest operator
// Sirve para agrupar elementos en un arreglo o un objeto

// La principal diferencia entre rest y spread es que el operador rest organiza el resto 
// de algunos valores específicos suministrados por el usuario en un arreglo de JavaScript. 
// Por otro lado la sintaxis spread expande los iterables en elementos individuales.

// rest operator
// Usa rest para encerrar el resto de valores específicos proporcionados por el usuario en un arreglo:
function miBio(primerNombre, apellido, ...otraInfo) {
    return otraInfo;
}

// Invoca la función miBio pasando cinco argumentos a sus parámetros:
const resultado1 = miBio("Oluwatobi", "Sofela", "CodeSweetly", "Desarrollo Web", "Hombre");

// La invocación anterior devolverá:
console.log(resultado1); // ["CodeSweetly", "Desarrollo Web", "Hombre"]

// spread operator
// Define una función con tres parámetros:
function miBio2(primerNombre, apellido, empresa) {
    return `${primerNombre} ${apellido} dirije ${empresa}`;
}

// Utiliza spread para expandir los elementos de un arreglo en argumentos individuales:
const resultado2 = miBio2(...["Oluwatobi", "Sofela", "CodeSweetly"]);

// La invocación anterior devolverá:
console.log(resultado2); // “Oluwatobi Sofela dirije CodeSweetly”