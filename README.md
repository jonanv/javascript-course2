# JavaScript

## JavaScript Moderno Guía Definitiva Construye +20 Proyectos

### NPM 
```javascript
npm init -y                         // Create package.json
npm install <package>               // Install package
```

### JSON Server
```javascript
json-server --watch db.json --port 4000             // Run json-server
```

### Cypress
```javascript
npx cypress open                                           // Running tests interactively
npx cypress run                                            // Running tests headlessly (CLI mode)
npx cypress run --spec "cypress/e2e/my-test-file.cy.js"    // Run specific tests
npx cypress run --spec "cypress/e2e/auth/*.cy.js"          // Run for multiple files
npx cypress run --browser chrome --headed                  // Run in a specific browser
```

### Testing Jest
```javascript
npm run test           // Run test
npm test               // Run test
npm t                  // Run test
npm t strings          // Run test with files strings
```

### Vite
```javascript
npm create vite        // Create app vite
npm run dev            // run app
npm run build          // create app's dist
```

### Generate files for tailwindcss with postcss and autoprefixer
```javascript
npx tailwindcss init -D
```

### Importing modules
enable `type: "module"` in package.json to use ES6 imports and exports, or use CommonJS syntax.

```javascript
module.export = {}      // Export CommonJS 
export default {}       // Export ES6 imports and exports
```

```javascript
const myModule = require('./myModule.js');  // Import CommonJS
import myModule from './myModule.js';       // Import ES6 imports and exports
```

### VUE
```javascript
// Composition API, using <script setup>
// Composition API es la forma más moderna de trabajar con Vue, es más flexible y permite una mejor organización del código. Es recomendado si todo tu proyecto está basado en Vue 3.
<script setup>
    import Header from './components/Header.vue'
</script>

// Options API, using export default
// Options API es un poco mas amigable para personas que van comenzando, también es la opción recomendada para personas que tiene más experiencia con lenguajes orientados a objetos.
// Option API es recomendado si tu projecto utilizará pequeñas piezas de Vue o escenarios no tan complejos.
<script>
    import Header from './components/Header.vue'

    export default {
        components: {
            Header
        }
    }
</scrip>
```