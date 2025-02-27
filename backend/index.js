require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./authentication/index.js")
const {getAll , todoInput , completed , deleteAllTodos , deleteTodo , updatingTodo} = require("./controller/todo.controller.js")
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

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