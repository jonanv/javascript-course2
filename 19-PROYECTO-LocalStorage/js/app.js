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

    const tweetObj = {
        id: Date.now(),
        tweet
    }
    // Agregar tweet al arreglo de tweets
    tweets = [...tweets, tweetObj];
    createHTML();
    form.reset();
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

function createHTML() {
    clearHTML();

    if (tweets.length > 0) {
        tweets.forEach(({id, tweet}) => {
            const li = document.createElement('li');
            li.innerHTML = tweet;
            li.setAttribute('data-id', id)
            tweetsList.appendChild(li);
        });
    }
}

function clearHTML() {
    while (tweetsList.firstChild) {
        tweetsList.removeChild(tweetsList.firstChild);
    }
}