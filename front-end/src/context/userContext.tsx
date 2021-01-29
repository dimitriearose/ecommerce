import { createContext, useReducer } from "react"
import axios from "axios"
import {
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  userReducer,
  signUpReducer,
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
  signup: (user: any) => true as any,
  signUpState: {
    loading: false,
    user: null,
    error: false,
    success: false,
  },
})

const userInitialState = {
  user: userFromLS,
}

const loginInitialState = {
  loading: false,
  user: null,
  error: false,
  success: false,
}

interface Props {
  children: any
}

export const UserProvider = ({ children }: Props) => {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState)
  const [signUpState, signUpDispatch] = useReducer(
    signUpReducer,
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
      signUpDispatch({ type: SIGNUP_LOADING })

      const { data } = await axios.post("http://localhost:3001/", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      signUpDispatch({ type: SIGNUP_SUCCESS, payload: data })

      console.log(data)

      addUser(data)

      return true
    } catch (error) {
      console.log("error", error)

      signUpDispatch({ type: SIGNUP_ERROR, payload: error })

      return false
    }
  }

  return (
    <UserContext.Provider
      value={{ addUser, removeUser, userState, signup, signUpState }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
