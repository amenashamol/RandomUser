const express=require('express')
 const {  deleteUser, deleteForm } = require('../controllers/user.controller')
const deleteRouter= express.Router()

deleteRouter.get('/delete/:id',deleteForm)
deleteRouter.delete('/delete/:id',deleteUser)

module.exports=deleteRouter