let express = require('express');
let mysql = require('mysql');
let cors = require('cors');

//Conexion a MySQL
let conexion = mysql.createConnection({
    host: 'localhost', //localhost
    user: 'root',
    password: '',
    database: 'pwdata'
});


let app = express();
app.use(express.json()); //devolver al cliente
app.use(cors()); //aceptar solicitudes de un servidor externo

//Nos conectamos a MySQL
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conectado a la base de datos');
    }
});


//Rutas de acceso 
app.get("/", function(req,res){
    res.send("Ruta de inicio");
})

//Seleccionamos todos los clientes
app.get('/api/cientes',(req,res)=>{
    conexion.query('SELECT * FROM cientes',(error,filas,)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});


//Encender el servidor 
let puerto = 3000;
app.listen(puerto, function(){
    console.log("Servidor escuchando puerto " + puerto);
})