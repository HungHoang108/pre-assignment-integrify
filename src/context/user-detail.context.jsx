import {React, createContext, useState} from 'react'

export const UserContext = createContext();

const UserDetailProvider = ({children}) => {
  const [userData, setUserData] = useState([])
    const value = {
      setUserData,
        userData
    }
  
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

export default UserDetailProvider