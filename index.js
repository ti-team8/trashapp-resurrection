const express = require('express')
const fs = require('fs');
const app = express()
 
//ruta home
app.get('/home', function (req, res) {
  res.send('Servidor Express funcionando')
})

//ruta que muestra el objeto de los integrantes
app.get('/integrantes', function (req, res) {
  const json = fs.readFileSync('./JSON/integrantes.json');
  const integrantes = JSON.parse(json);
  res.send(integrantes)
})


//ruta que muestra el objeto de los signos
app.get('/signos', function (req, res) {
  const json = fs.readFileSync('./JSON/signos.json');
  const signos = JSON.parse(json);
  res.send(signos)
})


app.listen(3000)