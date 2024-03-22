//file system : sistema de archivos
const fs = require('node:fs')// a partir de node 16, se recomienda poner 'node:'
//ASINCRONO(UTILIZA ARQUITECTURA DE EVENTOS) VS SINCRONO(BLOQUEAN EL PROCESO)
//SINCRONO
const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbólico
    stats.size, // tamaño en bytes
)