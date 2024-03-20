const fs = require('fs')

fs.readdir('.', (err, data) => {
    if (err) {
        console.error('Error al leer el directorio: ', err)
        return;
    }
    data.forEach(file => {
        console.log(file)
    })
})

//realizando un fichero, leer los directorios que tengo creados: en este caso devuelve:
/*
$ node 6.ls.js
.git
1.os-info.mjs
2.fs.js
3.fs-readFile-sync.js
3.fs-readFile.js
4.fs-async-await-parallel.mjs
4.fs-async-await.js
4.fs-async-await.mjs
4.fs-promises.js
5.path.js
6.ls.js
archivo.txt
archivo2.txt
cjs
mjs
Resume-Node.txt*/ 