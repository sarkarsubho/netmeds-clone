import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_SUCCESS,
  LOG_ERROR,
  LOG_LOADING,
  LOG_SUCCESS,
} from "./Auth.action";

const initState = {
  register: {
    loading: false,
    error: false,
    success: true,
  },
  login: {
    loading: false,
    error: false,
    isAuth:false,
    user: {},
  },
};

export const authReduser = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING:
      return { ...state, register: { ...state.register, loading: true,error:false } };

    case AUTH_SUCCESS:
      return { ...state, register: { ...state.register,loading:false, error:false,success: true } };
    case AUTH_ERROR:
      return { ...state, register: { ...state.register, loading:false,error: true } };

    case LOG_LOADING:
      return { ...state, login: { ...state.login, loading: true,error:false } };
    case LOG_SUCCESS:
      return { ...state, login: { ...state.login, loading: false,error:false,user:{...state.login.user,...payload},isAuth:true } };
    case LOG_ERROR:
      return { ...state, login: { ...state.login, loading: false,error:true } };
    default:
      return state;
  }
};
