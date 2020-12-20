import express from 'express';
import {addTodo,getTodoByUser,deleteTodoByUser, updatedTodo} from '../controllers/todoController.js'
import {auth} from '../middleware/auth.js';

const router=express.Router();
router.route('/').post(auth,addTodo).get(auth,getTodoByUser)
router.route('/:id').delete(auth,deleteTodoByUser).put(auth,updatedTodo)

export default router