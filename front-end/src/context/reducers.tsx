export const LOGIN_LOADING = "LOGIN_LOADING"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
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

export const loginReducer = (state: any, action: any) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
      }

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
