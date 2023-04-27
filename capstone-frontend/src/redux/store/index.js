import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import institutionReducer from "../reducers/institutionReducer";

const reducer = combineReducers({
  userReducer,
  institutionReducer
});

const store = configureStore({
  reducer,
});

export { store };
