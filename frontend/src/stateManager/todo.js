import {create} from 'zustand';


export const useAuthStore = create((set , get)=>({

    isCompleted : false,
    buttonClicked : 0 ,

    setButtonClicked : ()=>{
        
        set({
            buttonClicked : Math.random()
        })

    }


}))