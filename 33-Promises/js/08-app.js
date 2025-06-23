// Promise.any
// Promise.any recibe un array de Promises y devuelve un nuevo Promise que se resuelve cuando al menos una de las Promises del array se resuelve. Si todas las Promises son rechazadas, se rechaza con AggregateError.

// Diferencias con Promise.race()
// Promise.any() y Promise.race() son dos métodos de JavaScript que se utilizan para manejar promesas en paralelo. Sin embargo, hay una diferencia clave.

// Promise.any() devuelve la primera promesa que se resuelve, mientras que Promise.race() devuelve la primera promesa que se completa (ya sea resuelta o rechazada).

const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promesa1')
    }, 1000)
})

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promesa2')
    }, 500)
})

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promesa3')
    }, 3000)
})

Promise.any([promesa1, promesa2, promesa3])
    .then((result) => {
        console.log(result) // promesa1
    })
    .catch((error) => {
        console.log(error); // Error: 'All promises were rejected'
    });