 import React, { useReducer } from 'react'
const initialState = {
     count:0
}
 
const Reducer = (state, action) => {
    switch (action.type) {
        case "increment":
           return { ...state, count: state.count + 1 };
        case "decrement":
            if (state.count < 1) return {...state, count:0 };
            return { ...state, count: state.count - 1 }
        case "reset":
            return {...state, count:0}
        default:
            return state;
    }
}

const UseReducerHookCoutner = () => {
     
    const [state, dispatch] = useReducer(Reducer, initialState)

     return (
         <div className="flex flex-col justify-center items-center">
             <h1 className="text-4xl m-12">Use Reducer Hook for Counter </h1>
             <div className="flex flex-col justify-center items-center">
                 <div className="h-24 w-24  text-4xl bg-lime-200 text-center flex justify-center items-center">
                     {state.count}
                 </div>
                 <div>
                     <button
                         className="p-4 text-4xl bg-green-200 w-32 h-32"
                         onClick={() => dispatch({ type: "increment" })}
                     >
                         +
                     </button>
                     <button
                         className="p-4 text-4xl bg-gray-200 w-32 h-32"
                         onClick={() => dispatch({ type: "decrement" })}
                     >
                         -
                     </button>
                     <button
                         className="p-4 text-4xl bg-red-200 w-32 h-32"
                         onClick={() => dispatch({ type: "reset" })}
                     >
                         Reset
                     </button>
                 </div>
             </div>
         </div>
     );
 };
 
 export default UseReducerHookCoutner;
 