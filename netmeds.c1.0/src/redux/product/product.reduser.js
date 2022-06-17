import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from "./product.action";

const initstate = {
  loading: false,
  allproduct: [],
  error: false,
};

export const productReduser = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING:
      return { ...state, loading: true, error: false };

    case GET_PRODUCT_SUCCESS:
      return { ...state, loading: false, error: false, allproduct: payload };

    case GET_PRODUCT_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
