require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./authentication/index.js")
const {getAll , todoInput , completed , deleteAllTodos , deleteTodo , updatingTodo} = require("./controller/todo.controller.js")
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname ,"../frontend/dist" )))

app.get("*" , (req,res)=>{
    res.sendFile(path.join(__dirname , "../frontend/dist" , "index.html"));
})

app.use("/auth" , userRouter);
app.get("/" , getAll)
app.post("/todoInput" , todoInput)
app.put("/completed" , completed)
app.delete('/deleteTodo', deleteTodo )
app.put("/updating" , updatingTodo )
app.delete('/deleteAll' , deleteAllTodos)


app.listen(PORT, ()=>{

    console.log("Hello my friend")

})