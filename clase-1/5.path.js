const path = require('path')


//barra separadora de carpetas segun sistema operativo
console.log(path.sep)

//unir turas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tpm/sele-secret-files/password.txt') //nombre de un archivo
console.log(base)

//el nombre del ficherio quiero
const filename = path.basename('/tpm/sele-secret-files/password.txt', '.txt') 
console.log(filename)

//extension
const extension =path.extname('image.jpg')
console.log(extension)