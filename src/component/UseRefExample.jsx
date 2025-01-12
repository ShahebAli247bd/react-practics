import React, { useRef, useState } from 'react'

const UseRefExample = () => {
      const [input, setInput] = useState();
      const inputRef = useRef()

      const handleInput = () => {
            setInput(inputRef.current.value)
      }
  return (
        <div>
              <h1 className='text-5xl'>{ input? input:"UseRef Example" }</h1>
          <input type="text" name="username" className='border-b' ref={inputRef} value={input} onChange={handleInput}/>
      </div>
  );
}

export default UseRefExample
