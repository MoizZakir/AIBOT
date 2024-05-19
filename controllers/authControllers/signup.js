import signupSchema from '../../models/authModel/signupDB.js'
import bycrypt from 'bcrypt'
const signupController=async (req,res)=>{

    const userdata= await req.body;
    console.log(userdata)
    const salt = await  bycrypt.genSalt(10)
    const hashedPassword= await bycrypt.hash(req.body.password,salt)

    const userSignup= await new signupSchema( {
        firstName:userdata.firstName
        ,userName:userdata.userName
        ,lastName:userdata.lastName
        ,email:userdata.email
        ,password:hashedPassword
        ,

    })
    try {
        const userInfoSend=await userSignup.save(userSignup);
        if(userInfoSend){
            // console.log(userInfoSend)
            return res.status(200).json({status:true,message:'data added Succesfully '})
        }
        
    } catch (error) {
        
        return res.status(402).json({status:false,message:'error '})
    }






}

export {signupController}