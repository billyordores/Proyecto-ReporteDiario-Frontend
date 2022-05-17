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
  const queryGetAulas = `SELECT * FROM db_daily_report.tb_aulas`

    // `SELECT tbai.*, tba.*,  tbi.* FROM tb_aula_inventario tbai, tb_aulas tba, tb_inventario tbi
    // WHERE tbai.id_aula = tba.id_aula
    // AND tbai.id_objeto = tbi.id_objeto
    // ${ nombre ? 'AND tba.nombre = ?': ''}`
  connection.query(queryGetAulas,[], function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    response.send(results)
    });   
  
  })

router.get("/aulas", (request, response)=>{
  const {id_aula} = request.query
  connection.query(`SELECT * FROM tb_aulas
  ${ id_aula ? 'wHERE id_aula= ?': ''}`,[id_aula], function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    response.send(results)
  });
       
})

router.get("/informe", (request, response)=>{
  const {nombre} = request.query
  
  connection.query(`SELECT * FROM tb_aula_inventario tbai, tb_revision tbr, tb_inventario tbi, tb_aulas tba 
  WHERE tbr.id_aula_inventario = tbai.id_aula_inventario
  AND tbai.id_aula = tba.id_aula
  AND tbai.id_objeto = tbi.id_objeto
  AND tbr.fecha_creo LIKE '%2022-03-29%'
  ${ nombre ? 'AND tba.nombre = ?': ''}`,[nombre], function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    response.send(results)
  });
  
})

router.put("/aulas", (request, response)=>{
  
  connection.query(`INSERT INTO tb_aulas (nombre) VALUES ('0.4','0')`, function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    response.send(results)
  });
  
})

//CRUD Inventario

router.put("/inventario", (request, response)=>{
  
  connection.query(`UPDATE tb_inventario SET tipo_objeto= ? WHERE id_objeto = ?`,[request.body.tipo_objeto, request.body.id_objeto ], function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    response.send(results)
  });
  
})
router.delete("/inventario/:id_objeto", (request, response)=>{  
  connection.query(`DELETE FROM tb_inventario WHERE id_objeto = ?`,[request.params.id_objeto], function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    response.send(results)
  }); 
})
router.post("/inventario", (request, response)=>{  
  connection.query(`INSERT INTO tb_inventario (tipo_objeto) VALUES ( ? )`,[request.body.tipo_objeto], function (error, results, fields) {
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
router.get("/inventario/:id_aula", (request, response)=>{  
  connection.query(`SELECT * FROM tb_aula_inventario WHERE tb_aula_inventario.id_aula = ?`,[request.params.id_aula], function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    response.send(results)
  }); 
})

router.put("/revision", (request, response)=>{
  
  connection.query(`INSERT INTO tb_revision
  (id_aula_inventario, faltante,defectuoso,correcto, fecha_creo) VALUES
  (1, true,false,false, NOW())`, function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    response.send(results)
  });
  
}) 
//CD InventarioAulas
router.post("/inventarioAulas", (request, response)=>{  
  connection.query(`INSERT INTO tb_aula_inventario (id_aula,id_objeto) VALUES ( ? , ? )`,[request.body.id_aula, request.body.id_objeto], function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    response.send(results)
  }); 
})

//exportamos la variable "router" para definirla en la app principal y usar este modulo
module.exports = router