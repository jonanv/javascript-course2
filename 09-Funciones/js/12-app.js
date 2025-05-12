// Arrow functions en un forEach y un map

const cursos = ['JavaScript', 'PHP', 'Java', 'Python'];

// Arrow function en un forEach
cursos.forEach((curso) => {
    console.log(`Aprendiendo ${curso}`);
});

// Arrow function en un map
const aprendiendo = cursos.map((curso) => `Aprendiendo ${curso}`);
console.log(aprendiendo);