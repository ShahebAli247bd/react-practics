import React, { useContext, useState } from 'react'; // Importing necessary functions from React
import { UserContext } from './UserContext'; // Importing UserContext from UserContext file

const UpdateContext = () => {
      const [user, setUser] = useState(); // Initializing user state
      const {updateUser} = useContext(UserContext); // Destructuring updateUser function from UserContext
      const updateUserHere = (e) => {
            setUser(e.target.value); // Setting user state with input value
            updateUser(e.target.value); // Updating user data
      }
  return (
      <div>
          <input type="text" value={user} onChange={updateUserHere} /> {/* Input field to update user data */}
      </div>
  );
}

export default UpdateContext;