// Recorrer los elementos de un array

const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

// while
let i = 0;
while (i < months.length) {
    console.log(`El número en la posición ${i} es ${months[i]}`);
    i++;
}

// do while
let j = 0;
do {
    console.log(`El número en la posición ${j} es ${months[j]}`);
    j++;
} while (j < months.length);

// for
for (let i = 0; i < months.length; i++) {
    console.log(`El número en la posición ${i} es ${months[i]}`);
}

// forEach
months.forEach((number, index) => {
    console.log(`El número en la posición ${index} es ${number}`);
});

// for of
for (const number of months) {
    console.log(`El número es ${number}`);
}

// for in
for (const index in months) {
    console.log(`El número en la posición ${index} es ${months[index]}`);
}

// Iterador en arrays values
const monthsIterator = months.values();
console.log(monthsIterator.next().value); // enero
console.log(monthsIterator.next().value); // febrero

for (const month of monthsIterator) {
    console.log(month); // marzo, abril, mayo, junio
}

// Iterador en arrays keys
const monthsKeys = months.keys();
console.log(monthsKeys.next().value); // 0
console.log(monthsKeys.next().value); // 1

for (const key of monthsKeys) {
    console.log(key); // 2, 3, 4, 5
}

// Iterador en arrays entries
const monthsEntries = months.entries();
console.log(monthsEntries.next().value); // [0, 'enero']
console.log(monthsEntries.next().value); // [1, 'febrero']

for (const entry of monthsEntries) {
    console.log(entry); // [2, 'marzo'], [3, 'abril'], [4, 'mayo'], [5, 'junio']
}