import * as types from "./actionTypes";
import * as genomicApi from "../../api/genomicApi";
import * as seqApi from "../../api/seqApi";

export function loadGenomicSuccess(courses) {
  return { type: types.LOAD_GENOMICS_SUCCESS, courses };
}
let authorArr = [];
export function loadGenomic(geneSymbol) {
  return function (dispatch) {
    return genomicApi
      .getGenomic(geneSymbol)
      .then((courses) => {
        let TransNo = courses.Transcript.length;
        courses.Transcript.forEach((item) =>
          dispatch(loadSeqs(item.id, TransNo))
        );
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadSeqs(courses, TransNo) {
  return function (dispatch) {
    return seqApi
      .getSeqs(courses)
      .then((authors) => {
        authorArr.push(authors);
        if (authorArr.length == TransNo) {
          dispatch(loadSeqSuccess(authorArr));
        }
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadSeqSuccess(authors) {
  return { type: types.LOAD_SEQ_SUCCESS, authors };
}
