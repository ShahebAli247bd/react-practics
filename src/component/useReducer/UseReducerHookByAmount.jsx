import React, { useEffect, useReducer, useState } from "react";

const initialState = {
    count: 0,
};

export const Reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        // Increment the count by 1
        case "decrement":
            if (state.count < 1) {
                return { count: 0 };
            }
            return { ...state, count: state.count - 1 };
        // Decrement the count by 1 if count is greater than 0
        case "reset":
            return { ...state, count: 0 };
        // Reset the count to 0
        case "incbyamount":
            return { ...state, count: state.count + action.payload };
        // Increment the count by the specified amount
        case "decbyamount":
            if (state.count < 1) {
                alert("Value cannot be less than 1");
                return { ...state, count: 0 };
            }
            return { ...state, count: state.count - action.payload };
        // Decrement the count by the specified amount if count is greater than 0
        default:
            return state;
    }
};

const UseReducerHookByAmount = () => {
    const [input, setInput] = useState("0");
    const [state, dispatch] = useReducer(Reducer, initialState);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const AddAmount = () => {
        dispatch({
            type: "incbyamount",
            payload: Number(input),
        });
    };

    const substrucAmount = () => {
        dispatch({
            type: "decbyamount",
            payload: Number(input),
        });
    };

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
                        onClick={() => {
                            dispatch({ type: "reset" });
                            setInput("0");
                        }}
                    >
                    Reset 
                    </button>
                </div>
                <div>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInput}
                        className="border-b-2 hover:ring-1 outline-none p-4"
                    />
                    <button onClick={AddAmount} className="p-4 bg-green-500">
                        Add Amount
                    </button>
                    <button
                        onClick={substrucAmount}
                        className="p-4 bg-red-500"
                    >
                        Substruc Amount
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UseReducerHookByAmount;
