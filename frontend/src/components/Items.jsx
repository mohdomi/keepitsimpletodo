import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useAuthStore } from '../stateManager/todo';


export function Items() {

  const  {buttonClicked} = useAuthStore();

    const [tasks , setTasks] = useState([]);
  
    useEffect(() => {
  
      async function  something() {
  
        const {data} = await axios.get("/");
        const packet = data.packet;
        console.log(packet);
        setTasks(packet);
  
      }
  
      something();
  
    }, [buttonClicked])
  
    return (<div className="flex flex-col items-center">
  
          <div className='flex flex-col w-160 justify-start'>
          {
            tasks.map((task)=>{
              return(
                <div className='mb-3 flex border-2'>
                  <div className="w-120 font-medium">{task[0]}</div> <br />
                    <CompleteButton ids={task[2]} completed={task[3]} />
                </div>
              )
            })
          }
        </div>
  
    </div>)
  
  }

  function CompleteButton({ids , completed}){

    const [complete , setComplete] = useState(completed);

    async function updateComplete(){
        const toggle = complete ? false : true;
        setComplete(toggle);

        console.log("ID : " , ids);
        console.log("value : " , toggle);


        const response = await axios.put("/completed" , {
          userId : ids , 
          completed : toggle
        })
        
        console.log(response.data);

    }


    return(<div className="w-150 flex justify-end">
        <button onClick={updateComplete} className="border-2 mx-4 bg-neutral-500">{(!complete)? <div className="bg-red-500">Pending</div> : "Completed"}</button>
    </div>)

  }