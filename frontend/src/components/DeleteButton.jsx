import axios from 'axios';
import { useAuthStore } from '../stateManager/todo';

export function DeleteAll() {

    const {setButtonClicked} = useAuthStore();


    async function runFunc() {
        try {
            const response = await axios.delete("/deleteAll");

            console.log(response.data);
        }
        catch (err) {

            console.log(err.response.data.message)
        }

        setButtonClicked();


    }

    return (<div className="bg-red-500 border-3 w-20">
        <button onClick={runFunc}>Clear All</button>
    </div>)

}