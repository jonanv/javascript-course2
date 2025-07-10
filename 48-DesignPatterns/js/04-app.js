// Factory Pattern - Patron Fabrica
// Es un patron de creacion que permite crear objetos sin especificar la clase exacta del objeto que se va a crear.
// Se utiliza para crear objetos de una manera mas flexible y reutilizable, permitiendo que el cliente no tenga que preocuparse por la clase exacta del objeto que se va a crear.

class InputHTML {
    constructor(tipo, nombre) {
        this.tipo = tipo;
        this.nombre = nombre;
    }

    crearInput() {
        return `<input 
                    id="${ this.nombre }"
                    name="${ this.nombre }" 
                    type="${ this.tipo }" 
                />`;
    }
}

class HTMLFactory {
    crearElemento(tipo, nombre) {
        switch (tipo) {
            case 'text':
                return new InputHTML(tipo, nombre);
                break;
            case 'number':
                return new InputHTML(tipo, nombre);
                break;
            case 'email':
                return new InputHTML(tipo, nombre);
                break;
        
            default:
                return;
        }
    }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'nombre');
console.log(inputText.crearInput());

const elemento2 = new HTMLFactory();
const inputNumber = elemento2.crearElemento('number', 'cedula');
console.log(inputNumber.crearInput());

const elemento3 = new HTMLFactory();
const inputEmail = elemento3.crearElemento('email', 'email-persona');
console.log(inputEmail.crearInput());