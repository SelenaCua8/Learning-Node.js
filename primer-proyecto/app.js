//primero siempre importamos los datos
const express = require('express')

const app = express() //así se crea la página.

app.set('view engine', 'ejs') 

//creamos URL
app.get('/Juan', (req, res) =>{
    res.render('index')
})
//creamos URL
app.get('/Adios', (req, res) =>{
    res.render('adios')
})


//subir nuestro proyecto a un puerto y que tenga una URL
app.listen(3000, function(){
    console.log('corriendo en el puerto 3000')
})

//node --watch app.js se actualiza solo

//EJS template engine