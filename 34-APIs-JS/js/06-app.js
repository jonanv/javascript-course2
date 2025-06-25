// Speech API
// Es un API que permite a los navegadores web convertir texto en voz y viceversa.
// Permite a los desarrolladores crear aplicaciones que pueden hablar y escuchar al usuario.

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    // Inicia la grabación
    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    }

    // Cuando hayamos terminado de hablar se ejecuta la función
    recognition.onspeechend = function() {
        salida.textContent = 'Se dejo de grabar...';
        recognition.stop();
    }

    // Transcribe lo que se hablo a texto
    recognition.onresult = function(e) {
        console.log(e.results[0][0]);

        const { confidence, transcript } = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${ transcript }`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad: ${ parseInt(confidence * 100) }%`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    }
}