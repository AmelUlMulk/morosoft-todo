import jwt from 'jsonwebtoken';
import User from '../modals/userModal.js';
import asyncHandler from './ayncHandler.js';
 
export const auth=asyncHandler(async(req,res,next)=>{
  let token 
  const jwtSecret = "abc123";
  if
  (req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
      
    try {
        token=req.headers.authorization.split(' ')[1];
        const decoded=jwt.verify(token,jwtSecret);
        req.user=await User.findById(decoded.id).select('-password')
        
    } catch (error) {
         console.error(error)
         res.status(400)
    }
  }
  if(!token){
      res.status(400)
      throw new Error('Not Authorized')
  }
  next()
})