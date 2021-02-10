export const SIGNUP_LOADING = "SIGNUP_LOADING"
export const SIGNUP_ERROR = "SIGNUP_ERROR"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"

export const SIGNIN_LOADING = "SIGNIN_LOADING"
export const SIGNIN_ERROR = "SIGNIN_ERROR"
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS"

export const ADD_USER = "ADD_USER"
export const REMOVE_USER = "REMOVE_USER"

export const COURSE_CREATE_LOADING = "COURSE_CREATE_LOADING"
export const COURSE_CREATE_SUCCESS = "COURSE_CREATE_SUCCESS"
export const COURSE_CREATE_ERROR = "COURSE_CREATE_ERROR"

export const COURSE_FETCH_LOADING = "COURSE_FETCH_LOADING"
export const COURSE_FETCH_SUCCESS = "COURSE_FETCH_SUCCESS"
export const COURSE_FETCH_ERROR = "COURSE_FETCH_ERROR"

export const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      }

    case REMOVE_USER:
      return {
        ...state,
        user: null,
      }

    default:
      return state
  }
}

export const signUpReducer = (
  state: any,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      }

    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
        success: true,
      }

    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      }

    default:
      return state
  }
}

export const signInReducer = (
  state: any,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case SIGNIN_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      }

    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
        success: true,
      }

    case SIGNIN_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      }

    default:
      return state
  }
}

export const courseCreateReducer = (
  state: any,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case COURSE_CREATE_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      }

    case COURSE_CREATE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
        success: true,
      }

    case COURSE_CREATE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      }

    default:
      return state
  }
}

export const fetchCourseReducer = (
  state: any,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case COURSE_FETCH_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      }

    case COURSE_FETCH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
        success: true,
      }

    case COURSE_FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      }

    default:
      return state
  }
}
