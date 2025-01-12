import React, { useEffect } from 'react'

const InputField = ({
    type,
    mouseLeave,
    value,
    name,
    onChangeHandler,
    handleMouseLeave,
}) => {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input
                className="border-b my-5 outline-none"
                type={type}
                value={value}
                name={name}
                id={name}
                disabled={mouseLeave}
                onChange={(e) => onChangeHandler(e)}
                onMouseLeave={() => handleMouseLeave()}
            />
        </div>
    );
};

export default InputField;
