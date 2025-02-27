
export function WireframeSign({component}){
    
    return(<div className="h-screen flex items-center justify-center bg-neutral-600 ">
        <div className="h-120 w-100 bg-blue-200 ">
            {component}
        </div>        
    </div>)

}