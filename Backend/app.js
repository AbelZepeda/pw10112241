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

//Seleccionamos un cliente en especifico
app.get('/api/cientes/:id',(req,res)=>{
    conexion.query('SELECT * FROM cientes where id=?',[req.params.id],(error,fila)=>{
        if(error){
            throw error;

        }else{
            res.send(fila);}    
    })
});

//Eliminar a un cliente
app.delete('api/cientes/:id',(req,res)=>{
    let id=req.params.id;
    conexion.query('DELETE FROM cientes where id=?',[id],(error,resultados)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
});

//Insertar un nuevo cliente
app.post('/api/cientes',(req,res)=>{
    let data = {
        id:req.body.id,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        direccion:req.body.direccion,
        telefono:req.body.telefono,
        rfc:req.body.rfc,
        curp:req.curp,
        cp:req.body.cp,
    }
    let sql = 'INSERT INTO cientes SET ?';
    conexion.query(sql,data,(error,resultado)=>{
        if(error){
            throw error;
        }else{
            res.send(resultado);
        }
    })
});

//Actualizar
app.put('/api/cientes/:id',(req,res)=>{
    let id =req.params.id;
    let nombre=req.body.nombre;
    let apellido=req.body.apellido;
    let direccion=req.body.direccion;
    let telefono=req.body.telefono;
    let rfc=req.body.rfc;
    let curp=req.body.curp;
    let cp=req.body.cp;
    let sql="UPDATE cientes SET nombre=?,apellido=?,direcciones=?,telefono=?,rfc=?,curp=?,cp=? WHERE id=?";
    conexion.query(sql,[nombre,apellido,direccion,telefono,rfc,curp,cp,id]),(error,results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    }
});

//Encender el servidor 
let puerto = 3000;
app.listen(puerto, function(){
    console.log("Servidor escuchando puerto " + puerto);
})