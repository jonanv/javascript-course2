// Compocision - Composition
// Es una técnica que consiste en combinar funciones para crear nuevas funcionalidades. En lugar de crear funciones grandes y complejas, se crean funciones más pequeñas y simples que se pueden combinar para lograr un objetivo más grande.
// Esto permite una mayor reutilización de código y una mejor organización del mismo. Además, facilita la comprensión del código, ya que cada función tiene una responsabilidad específica y clara.

const obtenerNombre = (info) => ({
    mostrarNombre() {
        console.log(`Nombre: ${ info.nombre }`);
    }
});

const guardarEmail = (info) => ({
    agregarEmail(email) {
        console.log(`Guardando email en: ${ info.nombre }`);
        info.email = email;
    }
});

const obtenerEmail = (info) => ({
    mostrarEmail() {
        console.log(`Email de ${ info.nombre }: ${ info.email }`);
    }
});

const obtenerEmpresa = (info) => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${ info.empresa }`);
    }
});

const obtenerPuesto = (info) => ({
    mostrarPuesto() {
        console.log(`Puesto: ${ info.puesto }`);
    }
});

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    );
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    );
}

const cliente = Cliente('Juan', null, 'Codigo con Juan');
cliente.mostrarNombre();
cliente.agregarEmail('juan@gmail.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('==========================');

const empleado = Empleado('Pablo', null, 'Desarrollador');
empleado.mostrarNombre();
empleado.agregarEmail('pablo@gmail.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();