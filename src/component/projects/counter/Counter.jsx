import React, { useReducer, useState } from "react";

const initialState = {
      count:0
}

const Reducer = (state, action) => {
      switch (action.type) {
          case "inc":
              return { ...state, count: state.count + 1 };
          case "dec":
              if (state.count < 1) return { ...state, count: 0 };
              return { ...state, count: state.count - 1 };
          case "reset":
              return { count: 0 };
          case "incbyamout":
               return {...state, count: state.count + action?.payload};
          case "decbyamout":
              if (action.payload > state.count) {
                  return {...state, count:0 }, console.log("Can't substruc value from count, amout is heighr the value.");
              }
               return { ...state, count: state.count - action?.payload };
          default:
              return state;
      }
}


const Counter = () => {
    
    const [state, dispatch] = useReducer(Reducer, initialState)
    const [input, setInput] = useState(0);

    const inputHandle = (e) => {
        setInput(e.target.value)
    };


    return (
        <div className="flex flex-col justify-center items-center h-screen text-7xl">
            <h2>{state?.count}</h2>
            <div className="flex gap-4 mt-24">
                <button
                    onClick={() => dispatch({ type: "inc" })}
                    className="bg-slate-200 hover:bg-slate-400 hover:text-white rounded-full w-32 h-32 text-5xl"
                >
                    +
                </button>
                <button
                    onClick={() => setInput(0) || dispatch({ type: "reset" })}
                    className="bg-slate-200 hover:bg-slate-400 hover:text-white rounded-full w-32 h-32 text-5xl"
                >
                    0
                </button>
                <button
                    onClick={() => dispatch({ type: "dec" })}
                    className="bg-slate-200 hover:bg-slate-400 hover:text-white rounded-full w-32 h-32 text-5xl"
                >
                    -
                </button>
            </div>
            <div>
                <input
                    type="number"
                    value={input}
                    className="border-b outline-none"
                    onChange={inputHandle}
                />
            </div>
            <div className="mt-12">
                <button
                    onClick={() =>
                        dispatch({ type: "incbyamout", payload: Number(input) })
                    }
                    className="bg-slate-200 hover:bg-slate-400 hover:text-white rounded-full w-32 h-32 text-5xl"
                >
                    Add
                </button>
                <button
                    onClick={() =>
                        dispatch({ type: "decbyamout", payload: Number(input) })
                    }
                    className="bg-slate-200 hover:bg-slate-400 hover:text-white rounded-full w-32 h-32 text-5xl"
                >
                    Sub
                </button>
            </div>
        </div>
    );
};

export default Counter;
