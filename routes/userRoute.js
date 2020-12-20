import express from 'express';
import {register,login,loadUser} from '../controllers/userController.js';
import {auth} from '../middleware/auth.js';
const router=express.Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/user').get(auth,loadUser)

export default router