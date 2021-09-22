/*
 * @Author: wangshicheng
 * @Date: 2021-09-19 21:36:33
 * @Description: 
 * @FilePath: /test-contezt/src/pages/manage/index.tsx
 */
import React, { useContext } from "react";
import UserContext from '../../store/user-context'

export const Manage: React.FC = () => {
  const userContext = useContext(UserContext)
  const {name, age, sex, setUser} = userContext;

  const handleUserChange = () => {
    setUser?.({
      name: "xiaohong",
      age: 20,
      sex: 'girl'
    })
  }

  return (
    <div>
      <h2>manege page</h2>
      <p>{name}--{age}--{sex}</p>
      <button onClick={handleUserChange}>change User</button>

    </div>
  )
}