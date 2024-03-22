
  const http = require('http'); // No need to specify 'node:' in require

  const desiredPort = process.env.PORT ?? 1234;
  
//abajo creamos un servidor con createServer, que recibe un callback (funciones que se ejecutan despues de que pase algo)
  // Create a server
  const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hola mundo');
  });
  
  //Escuchar el servidor en un puerto con otro callback
  // Listen on the desired port
  server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`);
  });

