// New binding
// Es una forma de referirse al contexto de ejecución de una función cuando se invoca con el operador new.
// Cuando se utiliza new, se crea un nuevo objeto y se establece su prototipo al objeto
// prototype de la función constructora. Además, se devuelve el nuevo objeto creado.

function Auto(modelo, color) {
    this.modelo = modelo; // Este es el new binding
    this.color = color;
}

const auto = new Auto('Camaro', 'Azul');
console.log(auto);


// Window binding
// Es una forma de referirse al objeto global en un entorno de navegador.
// En un navegador, el objeto global es window. Cuando se accede a una variable sin
// un contexto específico, se refiere a una propiedad del objeto window.
window.color = 'Negro';

function hola() {
    console.log(color);
}

hola();