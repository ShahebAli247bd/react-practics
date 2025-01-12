import React from 'react'
import {data, data1} from '../App'

const PersonalInfo = () => {
      
      
  return (
      <data.Consumer>
              {(name) => {
                    return (
                          <data1.Consumer>
                                {(age) => {
                                      return (<h2>Name: {name} age: {age}</h2>)
                                }}
                          </data1.Consumer>
                    )
          }}
             
      </data.Consumer>
  );
}

export default PersonalInfo
