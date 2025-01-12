import { createContext, useState } from "react"; // Importing necessary functions from React

const UserContext = createContext(); // Creating a new context for user data

const UserProvider = ({ children }) => {
    // Creating a UserProvider component
    const [user, setUser] = useState({ name: "Shaheb Ali" }); // Initializing user state with default name

    const updateUser = (newUser) => {
        // Function to update user data
        setUser({ name: newUser }); // Setting the new user name
    };

    return (
        // Returning the UserContext Provider with user data and update function
        <UserContext.Provider value={{ user, updateUser }}>
            {children} {/*Rendering children components*/}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext }; // Exporting UserProvider component and UserContext
