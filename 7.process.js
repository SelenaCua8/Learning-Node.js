// GLOBAL Q PORPORCIONA INFO Y CONTROL SOBRE EL PROCESO ACTUAL DE EJECUCIÓN. PROPIEDADES Y METONOS QUE PERMITE INTERACTUAR CON EL ENTORNO DE NODE.JS Y EL PROCESO ACTUAL 

//Argumentos de entrada
console.log(process.argv)

// controlar el proceso y su salida
// process.exit(1)

// podemos controlar eventos del proceso
// process.on('exit', () => {
  // limpiar los recursos
// })

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)