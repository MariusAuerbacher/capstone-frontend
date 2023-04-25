import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";

const reducer = combineReducers({
  userReducer
});

const store = configureStore({
  reducer,
});

export { store };
