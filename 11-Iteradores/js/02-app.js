// Break y continue en un for loop

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Break');
        break; // Termina el bucle
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Continue');
        continue; // Salta a la siguiente iteración
    }
    console.log(i);
}