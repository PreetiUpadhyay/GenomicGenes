import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function seqReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_SEQ_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
