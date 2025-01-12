import React, { useEffect, useRef, useState } from 'react'

const UseRefExample2 = () => {
      const countRef = useRef()
      const [count, setCount] = useState(5);
      const [stop, setStop] = useState(false);
 
      useEffect(() => {
            countRef.current = setInterval(() => {
                  setCount((prevCount) => prevCount - 1);
                  
            }, 1000);
            
           
          return () => clearInterval(countRef.current);
      }, []);

      const stopCount = () => {
            clearInterval(countRef.current)
            setStop(true)
            setTimeout(() => {
                setStop(false);  
            },2000)
      }

  return (
      <div>
          <h1>Count Down Timer Using UseRef:</h1>
          <h1 className="text-5xl">{count ? count : 0}</h1>
          <button onClick={stopCount}>Stop Count</button>
          {stop && (
              <div
                  className="absolute bottom-0 bg-green-200 p-4"
                 
              >
                  Count Down Stop
              </div>
          )}
      </div>
  );
}

export default UseRefExample2
