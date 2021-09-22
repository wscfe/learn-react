/*
 * @Author: wangshicheng
 * @Date: 2021-09-19 21:37:27
 * @Description:
 * @FilePath: /test-contezt/src/pages/Home/index.tsx
 */
import React, { useContext } from "react"
import UserContext from "../../store/user-context"

export const Home: React.FC = () => {
  const userContext = useContext(UserContext)
  const { name, age, sex, setUser } = userContext

  const handleUserChange = () => {
    setUser?.({
      name: "you are foolish",
      age: 100,
      sex: "middle"
    })
  }

  return (
    <div>
      <h2>Home page</h2>
      <p>
        {name}--{age}--{sex}
      </p>
      <button onClick={handleUserChange}>change User</button>
    </div>
  )
}
