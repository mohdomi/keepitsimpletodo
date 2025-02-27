import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { SignInputs } from "../components/SignInputs"
import { WireframeSign } from "../components/WireframeSign"
import { JumpToNext } from "../components/JumpToNext"


export function  SignIn(){

    return(
        <WireframeSign component={
            <>
            <Heading heading="SignIn Page"></Heading>   
            <SignInputs input="Email" placeholder="xyz@xmail.com"></SignInputs>
            <SignInputs input="Password" placeholder="Password"></SignInputs>
            <Button input={"Signin"}></Button>
            <JumpToNext path="/signup" input="Create an account" />
            </>
        } />
    )

}