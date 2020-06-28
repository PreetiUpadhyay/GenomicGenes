import { handleResponse, handleError } from "./apiUtils";

export function getGenomic(geneSymbol) {
  return fetch(
    `http://rest.ensembl.org/lookup/symbol/homo_sapiens/${geneSymbol}.json?;expand=1`
  )
    .then(handleResponse)
    .catch(handleError);
}
