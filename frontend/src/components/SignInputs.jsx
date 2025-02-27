
export function SignInputs({input , placeholder , onChange}){

    return(<div className="flex flex-col items-center pt-4 m-3">
        <span className="font-bold text-lg">{input}</span>
        <input onChange={onChange} className="border-3 w-80 font-medium" type="text" placeholder={placeholder} />
    </div>)

}