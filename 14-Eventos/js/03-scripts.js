// Eventos con el teclado (inputs)

const busqueda = document.querySelector(".busqueda");

// Cuando se pulsa una tecla
busqueda.addEventListener("keydown", (e) => {
    console.log(e);
    // console.log(e.key);
    // console.log(e.target.value);

    if (e.key === "Enter") {
        console.log("Has pulsado la tecla Enter");
        console.log(e.target.value);
    } else if (e.key === "Escape") {
        console.log("Has pulsado la tecla Escape");
        busqueda.value = "";
    } else {
        console.log("Has pulsado otra tecla");
    }
});

// Cuando se suelta una tecla
busqueda.addEventListener("keyup", (e) => {
    console.log('Escribiendo...');
});

// blur, cuando se pierde el foco
busqueda.addEventListener("blur", (e) => {
    console.log("Has salido del input");
});

// copy
busqueda.addEventListener("copy", (e) => {
    console.log("Has copiado algo");
});

// cut
busqueda.addEventListener("cut", (e) => {
    console.log("Has cortado algo");
});

// paste
busqueda.addEventListener("paste", (e) => {
    console.log("Has pegado algo");
});

// input, cuando se realizan los eventos anteriores menos blur
busqueda.addEventListener("input", (e) => {
    console.log("Has escrito algo");
    console.log(e.target.value);
});