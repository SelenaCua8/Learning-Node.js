const fs = require('fs/promises') //reemplaza el callback
//pasa lo mismo pq las promesas son asincrono
//es lo mismo que callbacks


console.log('Leyendo el primer archivo....')
const text = fs.readFile('./archivo.txt', 'utf8')
    .then(text=>{
        console.log('primer texto:', text)
    })

console.log('Hacer cosas mientras lee el archivo.')


console.log('Leyendo el segundo archivo....')
fs.readFile('./archivo2.txt', 'utf8')
    .then(text=>{
        console.log('segundo texto:', text)
    })
