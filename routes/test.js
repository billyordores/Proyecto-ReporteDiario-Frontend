const express = require('express')
const router = express.Router()
const testController = require('../controllers/test.controller')
var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'dr_root',
    password : 'Uneatlantico22',
    database : 'db_daily_report'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

//router tiene los metodos http, get, post, put, delete y patch y la funcion que recibe es el "path"
//y una funcion de callback que se va a ejecutar cuando se llame ese endpoint

router.get("/enviar", (request, response)=>{
 const {nombre} = request.query
  console.log(request.headers);
  console.log(request.query);

  

      connection.query(`SELECT tbai.*, tba.*,  tbi.* FROM tb_aula_inventario tbai, tb_aulas tba, tb_inventario tbi
      WHERE tbai.id_aula = tba.id_aula
      AND tbai.id_objeto = tbi.id_objeto
      AND tba.nombre = ?`,[nombre], function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
        response.send(results)
      });
      
})

router.get("/enviar", (request, response)=>{
 
       connection.query(`SELECT * FROM tb_aulas, nombre = ?`,[nombre], function (error, results, fields) {
         if (error) throw error;
         // console.log('The solution is: ', results[0].solution);
         response.send(results)
       });
       
 })
 
  


router.get("/aulas", (request, response)=>{
  
       connection.query(`SELECT * FROM tb_aulas`, function (error, results, fields) {
         if (error) throw error;
         // console.log('The solution is: ', results[0].solution);
         response.send(results)
       });
       
 })
 
 router.get("/inventario", (request, response)=>{
  
  connection.query(`SELECT * FROM tb_inventario`, function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    response.send(results)
  });
  
})

router.put("/aulas", (request, response)=>{
  
  connection.query(`INSERT INTO tb_aulas (nombre) VALUES ('0.4')`, function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    response.send(results)
  });
  
}) 

router.put("/inventario", (request, response)=>{
  
  connection.query(`INSERT INTO tb_inventario (tipo_objeto) VALUES ('HDMI')`, function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    response.send(results)
  });
  
}) 



//exportamos la variable "router" para definirla en la app principal y usar este modulo
module.exports = router