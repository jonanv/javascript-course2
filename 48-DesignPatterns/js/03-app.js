// Singleton Pattern - Patron Singleton
// Se utiliza para garantizar que una clase tenga una unica instancia y proporcionar un punto de acceso global a ella.

// class Singleton {
//     constructor() {
//         if (Singleton.instance) {
//             return Singleton.instance;
//         }
//         this.data = [];
//         Singleton.instance = this;
//     }

//     addData(item) {
//         this.data.push(item);
//     }

//     getData() {
//         return this.data;
//     }
// }

class Persona {
    constructor(nombre, email) {
        if (Persona.instance) {
            return Persona.instance;
        }
        this.nombre = nombre;
        this.email = email;
        Persona.instance = this;
    }
}

const persona = new Persona('Juan', 'juan@correo.com');
console.log(persona);

const persona2 = new Persona('Pedro', 'pedro@correo.com');
console.log(persona2);

// Otra forma de hacerlo
let instancia = null;
class Empleado {
    constructor(nombre, email) {
        if (!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const empleado = new Empleado('Juan', 'juan@correo.com');
console.log(empleado);

const empleado2 = new Empleado('Pedro', 'pedro@correo.com');
console.log(empleado2);