// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import InputField from './component/input/Input'
// import Button from './component/button/Button'
// import ParentToChild from './component/ParentToChild'
// import Profile from './component/Profile'
// import ShoppingList from './component/ShoppingList'
// import UpdateContext from './component/contextapi/UpdateContext';
// import { UserProvider } from './component/contextapi/UserContext';
// import UserProfile from './component/contextapi/userProfile';
// import UseReducerHookCoutner from './component/useReducer/UseReducerHookCoutner';
// import Todos from './component/Todos'
// import Posts from './component/Posts'
// import PersonalInfo from './component/PersonalInfoContext'
// import {createContext} from 'react'
// import PersonalInfoUseContext from './component/PersonalInfoUseContext'
// export const data = createContext();
// export const data1 = createContext();

// import UseReducerHookByAmount from "./component/useReducer/UseReducerHookByAmount";
import Counter from "./component/projects/counter/Counter";
import HiddenSearch from "./component/projects/hiddenSearch/HiddenSearch";
import MealDB from "./component/projects/mealdb/MealDB";
import Todos from "./component/projects/Todos/Todos";
import ShowPost from "./component/ShowPost";
// import UseRefExample from "./component/UseRefExample";
// import UseRefExample2 from "./component/UseRefExample2";

function App() {

//   const name = "Shaheb Ali"
//   const age = 38

  return (
      <>
          {/* <data.Provider value={name}>
              <data1.Provider value={age}> */}
          {/* <ParentToChild /> */}
          {/* <Profile /> */}
          {/* <ShoppingList /> */}
          {/* <Todos/>  */}
          {/* <Posts /> */}
          {/* <PersonalInfo /> */}
          {/* <PersonalInfoUseContext />
              </data1.Provider>
          </data.Provider> */}
          {/* <UserProvider>
              <UserProfile />
              <UpdateContext />
          </UserProvider> */}
          {/* <UseReducerHookCoutner /> */}
          {/* <UseReducerHookByAmount /> */}
          {/* <UseRefExample /> */}
          {/* <UseRefExample2 /> */}
          {/* <ShowPost /> */}

          {/* Project Basic Start */}
          {/* <Counter /> {/* Project 1 Counter done with useReducer Hook  */}
          {/* <Todos /> */}
          {/* <HiddenSearch /> */}
          <MealDB />
      </>
  );
}

export default App
