// Variables
const form = document.querySelector('#formulario');
const btnAdd = document.querySelector('.button button[type="submit"]');
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
    console.log('Agregando tweet...');
}