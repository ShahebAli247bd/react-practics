import React, { useEffect, useState } from 'react'
import InputField from './input/Input';
import Button from './button/Button';

const ParentToChild = () => {
    const [mouseLeave, setMouseLeave] = useState(false);
    const [input, setInput] = useState(() => {
        let savedValue = localStorage.getItem("username");
        return savedValue ? savedValue : "";
    });

    useEffect(() => {
        localStorage.setItem("username", input);
        
    }, [input]);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };

  
  
    const onClickHandler = () => {
        setInput("")
        localStorage.setItem("username", "")
        setMouseLeave(false)
    }
 
    return (
        <div>
            <div className="flex gap-4">
                <InputField
                    type="text"
                    value={input}
                    name="playerone"
                    onChangeHandler={onChangeHandler}
                   
                    
                />
                <InputField
                    type="text"
                    value={input}
                    name="playertwo"
                    onChangeHandler={onChangeHandler}
                    
                />
            </div>
            <Button copy="Clear Text" onClickHandler={onClickHandler} />
        </div>
    );
};

export default ParentToChild;
