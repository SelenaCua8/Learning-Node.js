import { platform, release, arch, freemem, totalmem, uptime } from 'node:os'
//ya podemos hacer una aplicación pequeña con Node
console.log('Información del sistema operativo: ')
console.log('__________________')

console.log('Nombre del sistema operativo', platform())
console.log('Versión del sistema operativo', release())
console.log('ARquitectura', arch())
console.log('CPUs, os.cpus()') //<- Vamos a poder escalar procesos en Node.js
console.log('Memoria libre', freemem() / 1024 / 1024)
console.log('Memoria total', totalmem() / 1024 / 1024)
console.log('uptime', uptime() / 60 / 60)