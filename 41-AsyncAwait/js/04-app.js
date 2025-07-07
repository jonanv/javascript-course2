// Como manejar multiples awaits
function descargarNuevosClientes() {
    return new Promise((resolve, reject) => {
        console.log('Descargando nuevos clientes...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 3000);
    });
}

function descargarNuevosPedidos() {
    return new Promise((resolve, reject) => {
        console.log('Descargando nuevos pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

const app = async () => {
    try {
        // No se descargan todos al mismo tiempo
        // const clientes = await descargarNuevosClientes();
        // console.log(clientes);
        
        // const pedidos = await descargarNuevosPedidos();
        // console.log(pedidos);

        const respueta = await Promise.all([
                descargarNuevosClientes(), 
                descargarNuevosPedidos()
            ]);
        console.log(respueta);
        console.log(respueta[0]);
        console.log(respueta[1]);
    } catch (error) {
        console.error(error);
    }
}

app();