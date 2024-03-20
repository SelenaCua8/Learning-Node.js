const fs = require('fs');


console.log('Leyendo el primer archivo....')
const text = fs.readFile('./archivo.txt', 'utf8', (err, text )=>{
    console.log(text)
}) // metodo asincrono

console.log('Hacer cosas mientras lee el archivo.')


console.log('Leyendo el segundo archivo....')
fs.readFile('./archivo2.txt', 'utf8', (err, text) =>
{
    console.log(text)
}) // metodo asincrono
