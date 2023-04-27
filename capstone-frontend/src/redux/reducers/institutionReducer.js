import { SET_INSTITUTION, SET_IROLE } from "../actions";

const initialState = {
  institution: null,
  role: null
};

const institutionReducer = (state = initialState, action) => {

  if(action.type === SET_INSTITUTION){
    return {
      ...state,
      institution: action.payload
    }
  }
  if(action.type === SET_IROLE){
    return {
      ...state,
      role: action.payload
    }
  }
  return state;
};

export default institutionReducer;
