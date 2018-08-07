import {
  SET_ARTICLE_DETAILS,
  API_START,
  API_END,
  FETCH_ARTICLE_DETAILS
} from "../actions/types";

export default function(state = {}, action) {
  console.log("action type => ", action.type);
  switch (action.type) {
    case SET_ARTICLE_DETAILS:
      return { data: action.payload };
    case API_START:
      if (action.payload === FETCH_ARTICLE_DETAILS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_ARTICLE_DETAILS) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      break;
    default:
      return state;
  }
}
