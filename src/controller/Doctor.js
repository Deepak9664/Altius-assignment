const Doctormodel = require('../models/DoctorModel')
const Specialtiesmodel = require('../models/SpeczilationModel')

const createDoc= async(req,res)=>{
    try{
    const{name,age,location,About,Qualification,specilisation, experience}=req.body;
    let saveUserData = await Doctormodel.create(req.body)
        res.status(201).send({ status: true, message: "Success", data: saveUserData })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }


}




const getallDoctors = async function (req, res) {
    try {
       

        // let obj = { isDeleted: false}
        let savedData = await Doctormodel.find()
       
        return res.status(200).send({ status: true, msg: savedData })
    }
    catch (err) {
        res.status(500).send({
            status: false,
            msg: err.message
        })
    }
}

    const createspecialities = async(req,res)=>{
        try{
        const{Specialties,DocId}=req.body;
        let saveUserData = await Specialtiesmodel.create(req.body)
            res.status(201).send({ status: true, message: "Success", data: saveUserData })
        }
        catch (err) {
            return res.status(500).send({ status: false, message: err.message })
        }
    
    
    }
    const getspecialisation = async function (req, res) {
        try {
           
    
            // let obj = { isDeleted: false}
            let savedData = await Specialtiesmodel.find().populate("DocId")
           
            return res.status(200).send({ status: true, msg: savedData })
        }
        catch (err) {
            res.status(500).send({
                status: false,
                msg: err.message
            })
        }
    }
module.exports = {createDoc ,getallDoctors,createspecialities,getspecialisation}