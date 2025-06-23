// Promise.all
// Promise.all es una funcion que recibe un array de Promises y devuelve un nuevo Promise que se resuelve cuando todos los Promises del array se resuelven o se rechaza si alguno de los Promises del array se rechaza.
// Si una sola promesa falla fallan todas las promesas del array y se pierden los valores

const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(true);
// const promise3 = Promise.resolve('foo');
const promise3 = Promise.reject(new Error('failed'));

Promise.all([
    promise1,
    promise2,
    promise3
])
    .then((response) => console.log(response))
    .catch((error) => console.log(error));