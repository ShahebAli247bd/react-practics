import React from 'react'

const Button = ({ copy, onClickHandler }) => {
    return (
        <div>
            <button
                className="button bg-red-400 p-4"
                onClick={() => onClickHandler()}
            >
                {copy}
            </button>
        </div>
    );
};

export default Button
 