import users from '../../models/authModel/signupDB.js'
import jwt from 'jsonwebtoken'
import bycrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
const loginController=async(req,res)=>{
    const {email,password}=req.body;
    const user=await users.findOne({email:email})
    // console.log(users)
    try {if(user){
        const validatePassword=await bycrypt.compare(password,user.password)
        if(validatePassword){
            const token =jwt.sign({
                email:email,
                createdOn:new Date().getTime()
                
            },process.env.SECRET,{
                expiresIn: 60,})
               
                // window.localStorage.setItem('token', token)
                res.cookie("token",token ,{ maxAge: 60000,httpOnly:true})
              return  res.status(200).json({
                     status:true})
                // res.send('ok')
                console.log(req.headers)
                
                
            //     return res.status(200).json({
            //     status:true
            //     ,message:'loginSuccesfuly'
            //     ,data:user
            // })
        }
            
            

           
            else{
                return res.status(403).json({
                    status:false
                    ,message:'password is incorect'
                    
                })
                
            }
        }
        else{
            return res.status(403).json({
                status:false,
                message:'invalidCredientials'
            })
        }
        
    } catch (error) {
        console.log(error)
        // return res.json({
        //     message:'sytem Error',
        //     data:error
        // })
        
    }
    
       
    }
    
    

export{loginController}