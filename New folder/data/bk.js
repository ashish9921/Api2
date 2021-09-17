const mongoose =require('mongoose');

const student= new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    aurthor:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    }
   
})


const bkrank=new mongoose.model("bkrank",student);
module.exports=bkrank;