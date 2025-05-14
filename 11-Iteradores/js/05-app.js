// Do while

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

let j = 1;

do {
    let output = '';
    if (j % 3 === 0) output += 'Fizz';
    if (j % 5 === 0) output += 'Buzz';
    console.log(output || j);
    j++;
} while (j <= 100);