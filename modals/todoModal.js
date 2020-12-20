import mongoose from 'mongoose';
const TodoSchema=mongoose.Schema({
       user:{
           type:mongoose.Schema.Types.ObjectId,
           ref:'User',
           required:true
       },
       todo:{
           type:String,
           required:true,
       },
       done:{
           type:Boolean,
           required:true,
           default:false

       }

    
},
{
    timestamps: true,
 })
const Todo= mongoose.model('Todo',TodoSchema);
export default Todo