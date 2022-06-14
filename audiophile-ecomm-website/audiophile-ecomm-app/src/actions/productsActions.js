import {
  FETCH_DATA_ERROR,
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
} from '../constants/dataConstants';

export const listProducts = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_DATA_LOADING });
  try {
    const fetchData = fetch('/data.json');
    const response = await fetchData;
    const data = await response.json();
    dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    localStorage.setItem(
      'productsList',
      JSON.stringify(getState().products.data)
    );
  } catch (error) {
    dispatch({ type: FETCH_DATA_ERROR, payload: error.message });
  }
};
