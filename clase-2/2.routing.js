//METODO GET POR DEFECTO UNA PAGINA WEB 
//GET: PARA HACER UNA PETICION QUE RECUPERA DATOS
//HEAD: QUE SI SE PUEDE HACER LA PETICION, IGUAL Q EL GET PERO SOLO QUIERO VER LA CABEZERA DE RESPUESTA
//POST: CREAR UNA ENTIDAD DE UN RECURSO
//PUT REEMPLAZAR UN RECURSO Q YA EXISTE
//DELETE: ELIMINAR UN RECURSO
//OPTIONS: DESCRIBE LOS RECURSOS QUE SE PUEDEN HACER EN ESE PATH
//PATH: MODIFICAR PARCIALMENTE UNA PARTE DEL RECURSO


const http = require('node:http')

//commonJS -> modulos clásicoas de node
const dittoJSON = require('./pokemon/ditto.json')

//procesar la request lo más importante
const processRequest = (req, res) =>{
    const {method, url} = req
    
    switch (method) {
        case 'GET':
          switch (url) {
            case '/pokemon/ditto':
    
              res.setHeader('Content-Type', 'application/json; charset=utf-8')
              return res.end(JSON.stringify(dittoJSON))
            default:
              res.statusCode = 404
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              return res.end('<h1>404</h1>')
          }
    
        case 'POST':
          switch (url) {
            case '/pokemon': {
              let body = ''
    
              // escuchar el evento data
              req.on('data', chunk => {
                body += chunk.toString()
              })
    
              req.on('end', () => {
                const data = JSON.parse(body)
                // llamar a una base de datos para guardar la info
                res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
    
                data.timestamp = Date.now()
                res.end(JSON.stringify(data))
              })
    
              break
            }
    
            default:
              res.statusCode = 404
              res.setHeader('Content-Type', 'text/plain; charset=utf-8')
              return res.end('404 Not Found')
          }
      }
    }
    



//crear el servidor y procesamos la request
const server = http.createServer(processRequest)

server.listen(1234, () =>{
    console.log('server listening on port http://localhost:1234')

})