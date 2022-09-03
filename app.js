const express = require('express')
const app = express()
const getRout=require("./routes/gets.route")
const postRout=require("./routes/post.route")
const patchRout=require("./routes/patch.route")
const deleteRouter = require('./routes/delete.route')
const bodyParser = require('body-parser')


 app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/GET/user", getRout)
app.use("/POST/user", postRout)
 app.use("/PATCH/user", patchRout)
 app.use("/DELETE/user", deleteRouter)

module.exports=app