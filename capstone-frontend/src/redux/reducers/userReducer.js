import { SET_USER } from "../actions";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {

  if(action.type === SET_USER){
    return {
      ...state,
      user: action.payload
    }
  }

  return state;
};

export default userReducer;
