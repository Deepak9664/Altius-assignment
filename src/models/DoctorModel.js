const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema(
    {
        
        name: { type: String, required: true ,trim:true},
        age: { type: Number, required: true },
        location:{type:String,required:true},
        About:{type:String},
        Qualification:{type:String,required:true},
        specilisation:{type:[String]},
        experience:{type:Number,required:true},
        isDeleted: { type: Boolean, default: false },
        Designation:{type:String}
    }, { timestamps: true }
)

module.exports=mongoose.model('Doctor',DoctorSchema);