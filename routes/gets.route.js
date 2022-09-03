const express=require('express')
const { getUser, getAllUsers } = require('../controllers/user.controller')
const getrouter= express.Router()


getrouter.get('/random', getUser)
getrouter.get('/all', getAllUsers)





module.exports=getrouter