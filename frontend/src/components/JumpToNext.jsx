import { Link } from "react-router-dom"

export function  JumpToNext({input , path}){

    return(<div>
        <p className="flex justify-center">
        <Link to={path}>{input}</Link>
        </p>
        
    </div>)

}