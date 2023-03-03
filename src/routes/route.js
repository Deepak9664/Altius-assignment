const express=require('express');
const router=express.Router()
const DocController = require('../controller/Doctor')


router.post('/Doctor',DocController.createDoc)
router.get('/Doctor',DocController.getallDoctors)




module.exports=router