import axios from "axios";
import { SET_ARTICLE_DETAILS } from "./types";

export function fetchArticleDetails() {
  return function(dispatch) {
    return axios.get("https://api.myjson.com/bins/19dtxc").then(({ data }) => {
      dispatch(setArticleDetails(data));
    });
  };
}

function setArticleDetails(data) {
  return {
    type: SET_ARTICLE_DETAILS,
    payload: data
  };
}
