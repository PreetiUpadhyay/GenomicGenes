import * as types from "./actionTypes";
import * as seqApi from "../../api/seqApi";

export function loadSeqSuccess(authors) {
  return { type: types.LOAD_SEQ_SUCCESS, authors };
}

export function loadSeqs(id) {
  return function (dispatch) {
    return seqApi
      .getSeqs(id)
      .then((authors) => {
        dispatch(loadSeqSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
