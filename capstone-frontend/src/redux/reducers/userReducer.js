import { SET_ROLE, SET_USER } from "../actions";

const initialState = {
  user: null,
  role: null
};

const userReducer = (state = initialState, action) => {

  if(action.type === SET_USER){
    return {
      ...state,
      user: action.payload
    }
  }
  if(action.type === SET_ROLE){
    return {
      ...state,
      role: action.payload
    }
  }
  return state;
};

export default userReducer;
