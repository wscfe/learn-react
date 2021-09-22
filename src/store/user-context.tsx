/*
 * @Author: wangshicheng
 * @Date: 2021-09-19 21:21:21
 * @Description: 
 * @FilePath: /test-contezt/src/store/user-context.tsx
 */
import React, { useState } from "react";

type TDefaultContextValue = {
  name: string;
  age: number;
  sex: string;
  setUser?: (user: TDefaultContextValue) => void;
}
const defaultContextValue: TDefaultContextValue = {
  name: 'shicheng',
  age: 18,
  sex: 'boy',
  setUser: (user: TDefaultContextValue) => {}
}

const UserContext = React.createContext(defaultContextValue)

const UserContextComponent: React.FC = (props) => {
  const [user, setUser] = useState<TDefaultContextValue>(defaultContextValue)
  return (
    <UserContext.Provider value={{
      ...user,
      setUser: setUser
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export const UserContextCompo = UserContextComponent

export default UserContext