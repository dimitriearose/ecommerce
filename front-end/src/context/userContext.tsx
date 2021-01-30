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
  SIGNIN_ERROR,
  SIGNIN_LOADING,
  SIGNIN_SUCCESS,
  signInReducer,
  COURSE_CREATE_ERROR,
  COURSE_CREATE_LOADING,
  COURSE_CREATE_SUCCESS,
  courseCreateReducer,
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
  signin: (user: any) => true as any,
  signInState: {
    loading: false,
    user: null,
    error: false,
    success: false,
  },
  createCourseState: {
    loading: false,
    user: null,
    error: false,
    success: false,
  },
  logout: () => {},
  createCourse: (course: any, token: string) => true as any,
})

const userInitialState = {
  user: userFromLS,
}

const signUpInitialState = {
  loading: false,
  user: null,
  error: false,
  success: false,
}

const signInInitialState = {
  loading: false,
  user: null,
  error: false,
  success: false,
}

const courseCreateInitialState = {
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
    signUpInitialState
  )
  const [signInState, signInDispatch] = useReducer(
    signInReducer,
    signInInitialState
  )
  const [createCourseState, createCourseDispatch] = useReducer(
    courseCreateReducer,
    courseCreateInitialState
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

  const signin = async (user: { email: string; password: string }) => {
    try {
      signInDispatch({ type: SIGNIN_LOADING })

      const { data } = await axios.post("http://localhost:3001/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      signInDispatch({ type: SIGNIN_SUCCESS, payload: data })

      addUser(data)

      return true
    } catch (error) {
      console.log("error", error)

      signInDispatch({ type: SIGNIN_ERROR, payload: error })

      return false
    }
  }

  const logout = () => {
    removeUser()
  }

  const createCourse = async (
    course: {
      name: string
      originalPrice: string
      price: string
      fineprint: string
      category: string
      file: File
    },
    token: string
  ) => {
    try {
      createCourseDispatch({ type: COURSE_CREATE_LOADING })

      console.log(course)
      console.log(token)

      const formData = new FormData()
      formData.append("image", course.file)
      formData.append("name", course.name)
      formData.append("category", course.category)
      formData.append("fineprint", course.fineprint)
      formData.append("price", course.price)
      formData.append("originalprice", course.originalPrice)

      const { data } = await axios.post(
        "http://localhost:3001/course",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      createCourseDispatch({ type: COURSE_CREATE_SUCCESS, payload: data })

      return true
    } catch (error) {
      console.log("error", error)

      createCourseDispatch({ type: COURSE_CREATE_ERROR, payload: error })

      return false
    }
  }

  return (
    <UserContext.Provider
      value={{
        addUser,
        removeUser,
        userState,
        signup,
        signin,
        signInState,
        signUpState,
        logout,
        createCourse,
        createCourseState,
      }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
