const express=require('express')
const { getUser, getAllUsers, saveUser, getForm } = require('../controllers/user.controller')
const router= express.Router()

router.get('/form',getForm)
router.get('/random', getUser)
router.get('/all', getAllUsers)
router.post('/all', saveUser)

// router.post('/GET/user/save',(req,res)=>[

// ])

module.exports=router