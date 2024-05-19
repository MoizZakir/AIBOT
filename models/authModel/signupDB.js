import mongoose from "mongoose";

const signupSchema=mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        max:30,
    }, lastName:{
        type:String,
        require:true,
        max:30,
    },userName:{
        type:String,
        require:true,
        min:3,
         max:50,
        unique:true

    }
    ,email:{
        type:String,
        require:true,
        immutable: true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6
    },
},{timestamps:true})

export default mongoose.model("users",signupSchema)