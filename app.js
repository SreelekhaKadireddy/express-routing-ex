import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'

import userRouter from './routes/userRouter.js'
import productRouter from  './routes/productRouter.js'
 
//creat express app
let app=express()

//use morgan module to know about client request
app.use(morgan('dev'))

//main root
app.get("/",(req,resp)=>{
    resp.send("HOME PAGE...")
})

//routing
app.use("/user",userRouter)
app.use("/product",productRouter)
//create server and listen post number
app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    //use chalk module(terminal string styling purpose)
    console.log(chalk.blue(`server running on port:{8080}`))
})