// Variables
const form = document.querySelector('#formulario');
const tweetsList = document.querySelector('#lista-tweets');

let tweets = [];

// Events Listener
eventsListeners();
function eventsListeners() {
    form.addEventListener('submit', addTweet);
}

// Functions
function addTweet(e) {
    e.preventDefault();
    
    // Textarea donde el usuario tweetea
    let tweet = document.querySelector('#tweet').value;

    if (tweet === '') {
        showError('un mensaje no puede ir vacío');
        return;
    }
    console.log(tweet);
}

function showError(message) {
    let error = document.createElement('p');
    error.classList.add('error');
    error.textContent = message;
    
    // Insertarlo en el contenido
    const content = document.querySelector('#contenido');
    content.appendChild(error);
    // Elimina el error después de 3 segundos
    setTimeout(() => {
        error.remove();
    }, 3000);
}