// import express
const express=require('express')
const userController=require('../controllers/userController')
// using express create an object for Router class
const multerConfig=require('../middleware/multermiddleware')
const router=new express.Router()
router.post('/add',multerConfig.single("profile"),userController.addUser)
router.get('/get/allusers',userController.getallUsers)
router.delete('/delete/user/:id',userController.deleteUser)
router.put('/edit/user/:id',multerConfig.single("profile"),userController.editUser)
module.exports=router