const express = require("express")
const app = express() 
const port = process.env.PORT || 2000

app.get("/", function(req, res){
  res.sendFile(__dirname+"/front/index.html")
})

app.get("/perfil", function(req, res){
  res.sendFile(__dirname+"/front/perfil.html")
})

app.get("/canal", function(req, res){
  res.sendFile(__dirname+"/front/canal.html")
})

app.use(express.static(__dirname + '/public'));

app.listen(port, function(erro){
  if (erro) {
    console.log("Erro, servidor não iniciado... ")
  }else{
    console.log("Servidor iniciado e rodando normalmente")
  }
})