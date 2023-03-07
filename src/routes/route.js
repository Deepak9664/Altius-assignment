const express=require('express');
const router=express.Router()
const DocController = require('../controller/Doctor')



router.post('/Doctor',DocController.createDoc)
router.get('/Doctor',DocController.getallDoctors)

router.post('/specilitiess',DocController.createspecialities)
router.get('/specilities',DocController.getspecialisation)




module.exports=router