# JavaScript

## JavaScript Moderno Guía Definitiva Construye +20 Proyectos

### NPM 
```javascript
npm init -y                         // Create package.json
npm install <package>               // Install package
npm install <package> --save-dev    // Install package as dev dependency
npm i --save-dev nodemon            // Install nodemon as dev dependency
npm install <package> --save        // Install package as dependency
npm install <package> --global      // Install package globally
npm uninstall <package>             // Uninstall package
npm update <package>                // Update package
npm update <package> --save-dev     // Update package as dev dependency
npm update <package> --save         // Update package as dependency

npm list <package>                  // List installed packages
npm list -g <package>               // List globally installed packages

npm outdated <package>              // Check for outdated packages
npm audit                          // Check for vulnerabilities

npm run <script>                    // Run script defined in package.json
npm run dev                         // Run dev script defined in package.json
npm start                           // Run start script defined in package.json
npm test                            // Run test script defined in package.json
npm t                               // Run test script defined in package.json
npm t strings                       // Run test script defined in package.json with files strings
npm stop                            // Run stop script defined in package.json
npm restart                         // Run restart script defined in package.json
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
npm create vite             // Create app vite
npm init vite               // Create app vite
npm run dev                 // run app
npm run dev -- --port 3000  // run app in specific port
npm run dev -- -p 3000      // run app in specific port (short)
npm run build               // create app's dist
```

### Generate files for tailwindcss with postcss and autoprefixer
```javascript
npx tailwindcss init -p
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