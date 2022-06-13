import {
  FETCH_DATA_ERROR,
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
} from '../constants/dataConstants';

export const productsReducer = (
  state = { loading: true, data: [] },
  action
) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return { loading: true };

    case FETCH_DATA_SUCCESS:
      return { loading: false, data: action.payload };

    case FETCH_DATA_ERROR:
      return { error: action.payload };

    default:
      return state;
  }
};
