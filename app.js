const express = require('express')
const app = express()
const userRout=require("./routes/users.route")

app.use("/GET/user",userRout)

module.exports=app