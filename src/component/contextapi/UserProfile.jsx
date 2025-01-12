import React, { useContext } from 'react'
import { UserContext } from './UserContext';
 
 


const UserProfile = () => {
    const  {user}  = useContext(UserContext);
    
  return (
      <div>
          <h2>Hello, {user.name} </h2>
      </div>
  );
}

export default UserProfile;
