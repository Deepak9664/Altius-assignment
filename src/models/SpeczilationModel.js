const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const SpecilisationSchema = new mongoose.Schema(
    {
        
        Specialties: { type: String, required: true ,trim:true},
        DocId:{
            type: ObjectId,
            ref: "Doctor",
            required: true
        },
        
    }, { timestamps: true }
)

module.exports=mongoose.model('Speciliztion',SpecilisationSchema);