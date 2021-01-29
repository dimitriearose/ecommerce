export const SIGNUP_LOADING = "LOGIN_LOADING"
export const SIGNUP_ERROR = "SIGNUP_ERROR"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const ADD_USER = "ADD_USER"
export const REMOVE_USER = "REMOVE_USER"

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

export const signUpReducer = (state: any, action: any) => {
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
