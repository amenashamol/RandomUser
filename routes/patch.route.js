const express=require('express')
 const {  updateUser,  updateForm } = require('../controllers/user.controller')
const patchRouter= express.Router()

patchRouter.get('/update/:id',updateForm)
patchRouter.patch('/update/:id',updateUser)

module.exports=patchRouter