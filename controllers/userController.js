import asyncHandler from '../middleware/ayncHandler.js';
import signToken from '../utils/jsonToken.js';
import User from '../modals/userModal.js';

//public route to register a user
export const register=asyncHandler(async(req,res)=>{
    const {name, email, password}=req.body; 

    const userExist=await User.findOne({email});
    if(userExist){
        res.status(400)
        throw new Error('User already exists')
    }
    const user= await User.create({
       name,email,password
    })
    if(user){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:signToken(user._id)
        })
    }else{
        res.status(404);
        throw new Error('User not Found')
    }

    
})
//public route to login a user
export const login=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user && (await user.matchPasswords(password))){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:signToken(user._id)
        })
    }else{
        res.status(404);
        throw new Error('Invalid email or password')
    }

    
})
export const loadUser=asyncHandler(async(req,res)=>{ 
  const user=await User.findById(req.user._id)
    if(user){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:signToken(user._id)
        })
    }
    else{
        res.status(401)
        throw new Error('user not found')
    }
})