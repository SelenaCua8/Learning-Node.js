//importar express siempre
//const express = require('express')  Ó PUEDO ASI:
import express from 'express'
import ejs from 'ejs'
import {dirname, join} from 'path' //importar para poder poner el path de viewa
import { fileURLToPath } from 'url' //acá lo mismo

import indexRoutes from './routers/index.js'

//declaro la app
const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views') ) // para que sepa la ruta de ejs
//URL
app.set('view engine', 'ejs')

//quiero que uses indexRoute
app.use(indexRoutes)

//configurar css
app.use(express.static(join(__dirname, 'public')))

//utilizar el puerto 3000
app.listen(3001)
console.log('server is listening on port 3000')







//PASO POR PASO
//primero importo todo

