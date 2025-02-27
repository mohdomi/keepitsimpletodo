const zod = require("zod");
const {Todo} = require("../db.js");


const getAll =  async (req,res)=>{

    try{const data = await Todo.find({});


    const packet = data.map((items)=>[
        items.title ,  
        items._id , 
        items.completed

    ])

    res.status(200).json({packet});

    }catch(err){

        console.log(err.message);

        res.status(400).json({
            message : "Error in get all users"
        })

    }

}

const todoValid = zod.object({

    title : zod.string().trim().min(1 , {message : "Input atleast 1"}) ,

})
const todoInput =  async (req,res)=>{

    try{const todo = req.body;

    const {success} = todoValid.safeParse(todo);

    if(!success){
        return res.status(400).json({
            message : "Inputs are not valid"
        })
    }

    const todoSaved = await Todo.create(todo);

    res.status(200).json({
        message : "Todo created successfully" ,
        todoSaved
    })}catch(err){
        console.log(err.message);
    }

}

const completedValid = zod.object({

    userId : zod.string(),
    completed : zod.boolean()
    

})
const completed = async (req,res)=>{

    try{const {userId , completed} = req.body;

    const {success} = completedValid.safeParse({userId , completed});

    if(!success){
        return res.status(400).json(
            {message : "Invalid inputs"}
        )
    }

    const response = await Todo.updateOne({
        _id : userId
    } , {
        completed : completed
    })

    res.status(200).json({
        message : "Todo Completed" , 
        response
    })}catch(err){

        console.log(err.message);

        res.status(400).json({
            message : "Some error in completed route"
        })

    }


}


const updatingValid = zod.object({
    userId : zod.string(),
    title : zod.string().optional(),
})
const deleteTodo = async (req,res)=>{

    try{const {userId} = req.body;

    const delete_response = await Todo.deleteOne({
            _id : userId
    })

    res.status(200).json(
        {
            message : "Deleted Todo" ,
            delete_response
        } 
    )}catch(err){

        console.log(err.message);
        res.status(400).json({
            message : "Error in deleteTodo Route"
        })

    }
    


}

const updatingTodo = async (req,res)=>{

    try{const {title , userId} = req.body;

    const {success} = updatingValid.safeParse({
        title , userId
    })

    if(!success){
        return res.status(400).json({
            message : "Invalid Inputs in updating route"
        })
    }


    const response = await Todo.updateOne({
        _id : userId
    } , {
        title 
    })

    if(!response){
        return res.status(400).json({
            message : "Some issue in updateOne function in updating route"
        })
    }

    res.status(200).json({

        message : "Successfully Updated" ,
        response

    })}catch(err){

        console.log(err.message);

        res.status(400).json({
            message  :"Error in updating route"
        })

    }


} 


const deleteAllTodos = async (req,res)=>{

    try{await Todo.deleteMany({});

    res.status(200).json({
        message : "deletedAll"
    })}catch(err){
        console.log(err.message);
        res.status(400).json({
            message : "error in deleteALL"
        })
    }

}





module.exports = {

    getAll , todoInput , completed , deleteTodo , deleteAllTodos , updatingTodo

}

