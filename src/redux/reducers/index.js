import { combineReducers } from "redux";
import courses from "./genomicReducer";
import authors from "./seqReducer";

const rootReducers = combineReducers({
  courses,
  authors,
});

export default rootReducers;
