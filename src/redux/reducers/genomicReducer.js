import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function genomicReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_GENOMIC:
      return [...state, { ...action.course }];
    case types.LOAD_GENOMICS_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
