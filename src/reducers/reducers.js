import { combineReducers } from "redux";

const INITIAL_STATE = {
  historicalData: [],
  isFetching: false,
  error: undefined,
};

const getHistoricalDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_HISTORICAL_LIST_REQUEST":
      return Object.assign({}, state, {
        isFetching: true,
      });
    case "GET_HISTORICAL_LIST_SUCCESS":
      return Object.assign({}, state, {
        isFetching: false,
        historicalData: action.historicalData,
      });
    case "GET_HISTORICAL_LIST_FAILURE":
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export default combineReducers({
  historicalData: getHistoricalDataReducer,
});
