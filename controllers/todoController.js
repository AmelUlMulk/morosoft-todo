import asyncHandler from '../middleware/ayncHandler.js';
import signToken from '../utils/jsonToken.js';
import Todo from '../modals/todoModal.js';

export const addTodo=asyncHandler(async(req,res)=>{
    try {
   const todo= new Todo({
            user:req.user._id,
            todo:req.body.todo
          });
         
    const createdTodo= await todo.save();
     
    res.status(200).json(createdTodo)
    
    } catch (error) {
        res.status(500)
        throw new Error(error)    
    } 
    })
export const getTodoByUser=asyncHandler(async(req,res)=>{
  try {
      const todos=await Todo.find({user:req.user._id});
      
      res.status(200).json(todos)
  } catch (error) {
      res.status(500)
      throw new Error(error)
  }  
})
export const deleteTodoByUser=asyncHandler(async(req,res)=>{
    try {
        const id=req.params.id;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            msg:'success'
        })
    } catch (err) {
        res.status(500)
        throw new Error(error)
    }
})
export const updatedTodo=asyncHandler(async(req,res)=>{
    try {
       const id=req.params.id;
      
       const todo= await Todo.findById(id);
      
       
       if(todo){
            todo.todo=req.body.todo?req.body.todo:todo.todo
            todo.done=req.body.done?req.body.done:todo.done
        }
       await todo.save()
   res.status(200).json(todo)
    } catch (err) {
        res.status(500)
        throw new Error(err)
    }
})
