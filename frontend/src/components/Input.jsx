import { useState , useRef } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useAuthStore } from '../stateManager/todo';

export function Input() {

    const {buttonClicked , setButtonClicked} = useAuthStore();


    const [title, setTitle] = useState("");

    const titleReference= useRef();  


    async function  AddTodo(){

        const token = localStorage.getItem("token");

        if(!token){
            console.log("No token found , please log in.");
            return;
        }

        const response =  await axios.post("http://localhost:3000/todoInput" , {
            title : title
        })

        setTitle("");

        console.log(response.data);

        titleReference.current.value = "";

        setButtonClicked();


    }

    function onKeyDown(event){
        if(event.key == "Enter"){
            console.log("Hello brother")
            AddTodo();


        }
    }
  
  
    return (<div className="flex justify-center items-center h-80">
      <div className="flex flex-col">
        <input onKeyDown={onKeyDown} ref={titleReference} onChange={
            (e)=>{setTitle(e.target.value)}
        } className="border-2 w-150 mb-2 font-medium" type="text" placeholder='Enter Todo' />
        </div>
      <button onClick={AddTodo} className="border-2 ml-2 mb-2">Add</button>
    </div>)
  
  }