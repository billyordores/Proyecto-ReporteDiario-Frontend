const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
//routes
const routerTest = require("./routes/test")

app.use(routerTest)

app.listen(port, function(){
    console.log("Api express works fine :)")
})