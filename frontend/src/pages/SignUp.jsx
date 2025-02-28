import { Button } from "../components/Button"
import { SignInputs } from "../components/SignInputs"
import { Heading } from "../components/Heading"
import { JumpToNext } from "../components/JumpToNext"
import { useState } from "react"
import axios from "axios"

export const SignUp = ()=>{

    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    

    async function CallFunction(){

        const response = await axios.post("/auth/signup" , {
            username , email , password
        })
        console.log(response.data);
        localStorage.setItem("token" , response.data.token);

        setUsername("");
        setEmail("");
        setPassword("");

    }


    return(
    <div className="h-screen flex items-center justify-center bg-neutral-600 ">

        <div className="h-120 w-100 bg-blue-200 ">
      <Heading heading={"SignUp Page"} />
        <SignInputs onChange={(e)=>setUsername(e.target.value)} input={"Username"} placeholder={"Enter username"} />
        <SignInputs onChange={(e)=>setEmail(e.target.value)} input={"Email"} placeholder={"Enter Email"} />
        <SignInputs onChange={(e)=>setPassword(e.target.value)} input={"Password"} placeholder={"Enter Password"} />
        <Button onClick={CallFunction} input={"Signup"} />
        <JumpToNext path={"/signin"} input={"Already have an account"} />

        </div>        
    </div>)

}





