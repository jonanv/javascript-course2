// Mediador Pattern - Patron Mediador o intermediario
// Este patrón permite que los objetos se comuniquen entre sí sin necesidad de referenciarse directamente, lo que reduce el acoplamiento entre ellos.

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${ articulo }, con un precio de $${ precio }`);
    },
    vendido: (comprador) => {
        console.log(`Vendido a ${ comprador }`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${ comprador.nombre }: $${ cantidad }`);
    },
}

function Subasta() {
    let compradores = {};

    return {
        registrar: (usuario) => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}


// Crear objetos
const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

// Tienes que registrarlos
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 1966', 300);

juan.oferta(350, juan);
pablo.oferta(450, pablo);
juan.oferta(500, juan);
pablo.oferta(700, pablo);

vendedor.vendido('Pablo');