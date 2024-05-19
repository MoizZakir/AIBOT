import { Router } from "express";
import { signupController } from "../../controllers/authControllers/signup.js";
import { loginController } from "../../controllers/authControllers/login.js";
const authRoutes=Router();


//for signup
authRoutes.post('/signup',signupController)
authRoutes.post('/login',loginController)
export {authRoutes}