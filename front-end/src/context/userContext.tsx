import { createContext, useReducer } from "react"
import axios from "axios"
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  userReducer,
  loginReducer,
  ADD_USER,
  REMOVE_USER,
} from "./reducers"

const userFromLS = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")!)
  : null

const UserContext = createContext({
  addUser: (user: any) => {},
  removeUser: () => {},
  userState: { user: userFromLS },
  signup: (user: any) => {},
})

const userInitialState = {
  user: userFromLS,
}

const loginInitialState = {
  loading: false,
  user: null,
  error: false,
}

interface Props {
  children: any
}

export const UserProvider = ({ children }: Props) => {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState)
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    loginInitialState
  )

  const addUser = (user: any) => {
    userDispatch({ type: ADD_USER, payload: user })
    localStorage.setItem("user", JSON.stringify(user))
  }

  const removeUser = () => {
    userDispatch({ type: REMOVE_USER })
    localStorage.removeItem("user")
  }

  const signup = async (user: {
    name: string
    email: string
    password: string
  }) => {
    try {
      loginDispatch({ type: LOGIN_LOADING })

      const { data } = await axios.post("http://localhost:3001/", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      loginDispatch({ type: LOGIN_SUCCESS, payload: data })
      addUser(data)
    } catch (error) {
      loginDispatch({ type: LOGIN_ERROR })
    }
  }

  return (
    <UserContext.Provider value={{ addUser, removeUser, userState, signup }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
