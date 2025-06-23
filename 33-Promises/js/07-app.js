// Promise.allSettled
// La diferencia más importante entre Promise.all() y Promise.allSettled() es que Promise.allSettled() siempre resuelve, independientemente de si se hayan resuelto o rechazado las promesas.

// En los resultados tendremos un array de objetos, donde cada objeto es la promesa (según el orden que hemos usado en el array que le pasamos a Promise.allSettled()) y su estado final.

// Si la promesa se resuelve correctamente, tendremos un objeto con el estado fulfilled y el valor de la promesa como propiedad value.

// Si la promesa se rechaza, tendremos un objeto con el estado rejected y la razón por la que se rechazó como propiedad reason.

const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(true);
// const promise3 = Promise.resolve('foo');
const promise3 = Promise.reject(new Error('failed'));

Promise.allSettled([
    promise1,
    promise2,
    promise3
])
    .then((response) => console.log(response))
    .catch((error) => console.log(error));