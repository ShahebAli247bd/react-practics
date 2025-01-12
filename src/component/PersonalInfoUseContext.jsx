import React, { useContext } from 'react'
import {data, data1} from '../App'

const PersonalInfoUseContext = () => {
      const name = useContext(data)
      const age = useContext(data1)
  return (
    <div>
              <div>My Name is {name} and age is { age}</div>
    </div>
  )
}

export default PersonalInfoUseContext
