const express=require('express')
const {  saveUser,getForm, updateUser, getForm2 } = require('../controllers/user.controller')
const postrouter= express.Router()

postrouter.get('/save', getForm)
//postrouter.get('/update/:id', getForm2)
postrouter.post('/save', saveUser)



module.exports=postrouter