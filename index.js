// const chalk = require('chalk');
console.clear();
const express = require('express');
const os = require('os');
const util = require('util');
const v8 = require('v8');
const path = require('path');
const servidor = express();
const puerto = 3000;
var nombre = "Sebastian"
var edad = 18;
var texto = util.format("Hola %s, tienes %d años", nombre, edad);
servidor.get('/', (require, response) => {
    response.send(`Este es el procesador del pc: ${os.cpus()[0].model} <br>
    Esto es path: ${path.join("/js", "index.js", "/css", "styles.css")} <br>
    ${path.dirname(`${os.tmpdir}`)} <br>
    ${v8.getHeapStatistics().heap_size_limit}`);
})

console.log(texto)
console.log(v8.getHeapStatistics())

servidor.listen(puerto, () => console.log(util.log('funciona'))) 