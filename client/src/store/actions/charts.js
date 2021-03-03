import { FETCH_ALL } from '../../constants/actionTypes';

import * as api from '../../api/index.js';

export const getChartData = () => async (dispatch) => {
    try {
        const { data } = await api.fetchData();

        dispatch({ type: FETCH_ALL, chartInput: data });
       /*  console.log("aaa")
        console.log(data)
        console.log("aaa") */
    } catch (error) {
        /* console.log(error.message); */
    }
};