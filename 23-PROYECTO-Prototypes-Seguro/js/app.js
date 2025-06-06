// Object constructors
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

// Realiza la contización del seguro
Seguro.prototype.cotizarSeguro = function() {
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */

    let cantidad;
    let base = 2000;
    
    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    
        default:
            break;
    }

    // Leer el año
    let diferencia = new Date().getFullYear() - this.anio;

    // Cada año que la diferencia es mayor, el costo va a reducirse un 3%
    cantidad += ((diferencia * 3) * cantidad) / 100;

    /*
        Si el seguro es básico se multiplica por un 30% más
        Si el seguro es completo se multiplica por un 50% más
    */
    
    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
}

function UI() { }

// LLenar las opciones de los años
UI.prototype.llenarOpciones = () => {
    const year = document.querySelector('#year');
    let max = new Date().getFullYear();
    let min = max - 20;

    for (let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = min;
        option.textContent = i;
        year.appendChild(option);
    }
}

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

// Muestra el resultado
UI.prototype.mostrarResultado = (seguro, total) => {
    const { marca, anio, tipo } = seguro;

    let textoMarca;
    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }
    // Crear resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${ textoMarca }</span></p>
        <p class="font-bold">Año: <span class="font-normal">${ anio }</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize">${ tipo }</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${ total }</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');

    // Mostrar spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    
    setTimeout(() => {
        spinner.style.display = 'none'; // Se oculta el spinner
        resultadoDiv.appendChild(div); // Se muesta el resultado
    }, 3000);
}

// Instanciar UI
const ui = new UI();
// console.log(ui);

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // Llena el select con los cambios
});

eventsListener();
function eventsListener() {
    const formulario = document.querySelector('#cotizar-seguro');

    formulario.addEventListener('submit', cotizarSeguro);
}

// Funciones
function cotizarSeguro(e) {
    e.preventDefault();

    // Leer marca seleccionada
    const marca = document.querySelector('#marca').value;
    
    // Leer año seleccionado
    const anio = document.querySelector('#year').value;
    
    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || anio === '' || tipo === '') {
        ui.mostrarMensaje('Faltan datos, todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('Cotizando...', 'correcto');

    // Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
        resultados.remove();
    }

    // Instanciar seguro
    const seguro = new Seguro(marca, anio, tipo);
    const total = seguro.cotizarSeguro();

    // Utilizar el prototype que va a cotizar el seguro
    ui.mostrarResultado(seguro, total);
}