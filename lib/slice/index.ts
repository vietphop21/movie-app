import { combineReducers } from "redux";
import { getMovie } from "./slice";


const rootReducer = combineReducers({
  [getMovie.name]: getMovie.reducer,
});

export default rootReducer;
