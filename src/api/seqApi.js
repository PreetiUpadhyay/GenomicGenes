import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.API_URL + "/authors/";

export function getSeqs(id) {
  return fetch(`http://rest.ensembl.org/sequence/id/${id}`, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then(handleResponse)
    .catch(handleError);
}
