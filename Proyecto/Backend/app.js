let express = require('express');
let mysql = require('mysql');
let cors = require('cors');


let app = express();
app.use(express.json()); //devolver al cliente
app.use(cors()); //aceptar solicitudes de un servidor externo

//Rutas de acceso 
app.get("/", function(req,res){
    res.send("Ruta de inicio");
})


//Encender el servidor 
let puerto = 3000;
app.listen(puerto, function(){
    console.log("Servidor escuchando puerto " + puerto);
})