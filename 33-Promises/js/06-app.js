// Promise.race
// Promise.race() devuelve la primera promesa que se completa (ya sea resuelta o rechazada).

const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(true);
// const promise3 = Promise.resolve('foo');
const promise3 = Promise.reject(new Error('failed'));

Promise.race([
    promise1,
    promise2,
    promise3
])
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
