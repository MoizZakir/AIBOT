import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai"
import OpenAI from "openai";


import dotenv from 'dotenv'

import cors from 'cors'



const app=express();
dotenv.config()


app.use(cors( {
    origin: true, credentials: true}))

app.use(express.json())



///openAi

app.get('/',(req,res)=>{
    res.send('welcome in home')
    
    
    
})
const genAI = new GoogleGenerativeAI(process.env.API);

// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro" })


app.post("/api/chatgpt", (req, res) => {
    console.log(req.body.input)
    // return
    async function main() {
        // const image = await openai.images.generate({ model: "dall-e-3", prompt: req.body.input });

        // console.log(image.data);
        // res.send(image.data)

        const prompt = req.body.input

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
        res.send(text)
    }

    main();
})


app.listen(process.env.PORT,()=>{
console.log("server started at port =>>" ,process.env.PORT)
})
