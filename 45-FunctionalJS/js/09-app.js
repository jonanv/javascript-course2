// Partials y Currying
// Currying es una técnica de programación funcional que consiste en transformar una función que recibe varios argumentos en una secuencia de funciones que reciben un único argumento cada una.
// Esto permite crear funciones más específicas a partir de funciones más generales, facilitando la reutilización y composición de funciones.
// En este ejemplo, se muestra cómo crear una función de suma que utiliza currying para sumar dos números. La función `sumar` toma un número y devuelve otra función que toma el segundo número y devuelve la suma de ambos. Esto permite crear funciones específicas para sumar un número fijo a cualquier otro número.
// Además, se muestra cómo se pueden crear funciones más específicas utilizando currying, como `sumar5` que suma 5 a cualquier número, o `sumar10` que suma 10 a cualquier número. Esto facilita la creación de funciones reutilizables y específicas sin necesidad de duplicar código.

// Partials
// Los partials son una técnica de programación funcional que permite crear funciones más específicas a partir de funciones más generales, fijando algunos de sus argumentos.
// Esto se logra utilizando una función que toma una función y algunos de sus argumentos, y devuelve una nueva función que toma los argumentos restantes.
// Los partials son útiles para crear funciones más específicas y reutilizables, facilitando la composición de funciones y la creación de funciones más simples a partir de funciones más complejas.
// En este ejemplo, se muestra cómo crear una función de suma que utiliza partials para sumar
// dos números. La función `sumar` toma dos números y devuelve su suma. Luego, se utiliza la función `partial` para crear una nueva función `sumar5` que suma 5 a cualquier número, y otra función `sumar10` que suma 10 a cualquier número.

// Ejemplo
const sumar = (a) => (b) => a + b;
const sumar5 = sumar(5);
console.log(sumar5(3)); // 8

// Ejemplo
const partial = (fn, ...args) => (...rest) => fn(...args, ...rest);
const sumarPartial = partial((a, b) => a + b, 5);
console.log(sumarPartial(10)); // 15

// Ejemplo
const sumar2 = (a, b, c) => a + b + c;
const parcial = (a) => (b, c) => sumar2(a, b, c); // Parcial

const primerNumero = parcial(1);
const resultado = primerNumero(2,3);
console.log(resultado);

// Ejemplo
const parcial2 = a => b => c => sumar2(a, b, c);

const primerNumero2 = parcial2(1);
const segundoNumero = primerNumero2(2);
const resultado2 = segundoNumero(3);
console.log(resultado2);

// El mismo caso anterior, aplicando currying y partial dividiendo la funcion en pequeñas partes
const resultadoParcial = parcial2(1)(2)(3);
console.log(resultadoParcial);