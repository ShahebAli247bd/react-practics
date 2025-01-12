import React, { useEffect, useState } from 'react'
import InputField from './input/Input'
import { FaRegCopy, FaCopy } from "react-icons/fa";



const Profile = () => {
      const [input, setInput] = useState({
            username:localStorage.getItem("username"),
            age:localStorage.getItem("age")
      })
      useEffect(() => {
            localStorage.setItem('username', input.username)
            localStorage.setItem('age', input.age)
      },[input])

      const handleInput = (e) => {
            const { name, value } = e.target;

            setInput((prev) => ({
                  ...prev, [name]:value
            }))
      }

      const [copied, setCopied] = useState("")

      const handleCopied = () => {
            navigator.clipboard.writeText(input.username).then(() => {
                setCopied(input.username);
                setTimeout(() => {
                    setCopied("");
                }, 1000);
            });
      }
  return (
      <div>
          <p>
              {input.username}{" "}
              <FaRegCopy onClick={handleCopied} className="inline" /> | {input.age}
           </p>

          <label htmlFor="username">Username: </label>
          <input
              type="text"
              name="username"
              id="username"
              value={input.username}
              onChange={handleInput}
              className="border-b mx-4"
          />

          <label htmlFor="age">Age: </label>
          <input
              type="text"
              name="age"
              id="age"
              value={input.age}
              onChange={handleInput}
              className="border-b"
          />
          {copied && (
              <div
                  style={{ position: "absolute", bottom: "3rem" }}
                  className="bg-green-200 p-4"
              >
                  Text Copied to clipboard
              </div>
          )}

          {/* <FaCopy /> */}
      </div>
  );
}

export default Profile
