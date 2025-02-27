const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI);

const todoSchema = mongoose.Schema({
    title : String ,
    completed :{
        type : Boolean ,
        default : false
    }, 
} , {
    timestamps : true
})

const userSchema =  mongoose.Schema({
    username : {
        type : String, 
        require : true
    },
    email : {
        type : String
    },
    password : {
        type : String , 
        require : true
    },
})

const Todo = mongoose.model("Todo" , todoSchema);
const User = mongoose.model("User" , userSchema);


module.exports = {Todo , User};