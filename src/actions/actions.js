import * as HistoricalService from '../services/historical.service';

export  const getHistoricalList = ()=> {
    return  (dispatch) => {
        dispatch({
            type: 'GET_HISTORICAL_LIST_REQUEST'
        });
        return HistoricalService.getAllHistoricalData()
            .then((res) => {
                dispatch({
                    type: 'GET_HISTORICAL_LIST_SUCCESS',
                    historicalData: res
                });
            })
            .catch((err) => {
                dispatch({
                    type: 'GET_HISTORICAL_LIST_FAILURE',
                    error: err
                });
            })
    }
}