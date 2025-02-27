export function Button({input , onClick}){

    return(<div className="flex justify-center m-8">
    <button onClick={onClick} className="font-semibold text-lg border-2 p-2">
        {input}
    </button>
    </div>)

}