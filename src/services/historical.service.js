import axios from 'axios';
const WEB_SOCKET_URL = "http://kaboom.rksv.net/watch";

export const getAllHistoricalData = () => {

    return axios(`${process.env.REACT_APP_TEST_VAR}historical`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Accept-Encoding': 'gzip, deflate'
        
        }
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
export const getLiveChartData = () => {

    return {
        url:WEB_SOCKET_URL
    };
    
};
