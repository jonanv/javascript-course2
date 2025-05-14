// While loop

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

let j = 1;

while (j <= 100) {
    let output = "";
    if (j % 3 == 0) output += "Fizz";
    if (j % 5 == 0) output += "Buzz";
    console.log(output || j);
    j++;
}