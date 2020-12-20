import express,{json} from 'express';
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
import userRouter from './routes/userRoute.js';
import todoRouter from './routes/todoRoute.js';
import {errorHandler,notFound} from './middleware/errorHandler.js'
import path from 'path'

//initializing environment variables
dotenv.config();

//connecting database
connectDb();
//initialiing port
const PORT=process.env.PORT||5000;

const app=express();
app.use(express.json())
app.use('/api/users',userRouter);
app.use('/api/todos',todoRouter);

const __dirname=path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

if(process.env.MODE==='production'){
  app.use(express.static(path.join(__dirname,'/client/build')))
  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')))
}else{
  app.get('/',(req,res)=>{
    res.json({
      msg:'Api is Running'
    })
  })
}

app.use(errorHandler);
app.use(notFound)
app.listen(PORT,(req,res)=>{
  console.log('server running')
})