import {
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  POST_DATA_LOADING,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR,
  DELETE_DATA_LOADING,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_ERROR,
  INC_DATA,
  DEC_DATA,
  CLEAR_DATA,
} from "./cart.types";

const initState = {
  getCData: {
    loading: false,
    success: false,
    error: false,
  },
  postCData: {
    loading: false,
    success: false,
    error: false,
  },
  deleteCData: {
    loading: false,
    success: false,
    error: false,
  },
  cartData: [],
  count: 1,
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING: {
      return {
        ...state,
        getCData: {
          ...state.getCData,
          loading: true,
          success: false,
          error: false,
        },
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        getCData: {
          ...state.getCData,
          loading: false,
          success: true,
          error: false,
        },
        cartData: payload,
      };
    }
    case GET_DATA_ERROR: {
      return {
        ...state,
        getCData: {
          ...state.getCData,
          loading: false,
          success: false,
          error: true,
        },
      };
    }
    case POST_DATA_LOADING: {
      return {
        ...state,
        postCData: {
          ...state.postCData,
          loading: true,
          success: false,
          error: false,
        },
      };
    }
    case POST_DATA_SUCCESS: {
      return {
        ...state,
        postCData: {
          ...state.postCData,
          loading: false,
          success: true,
          error: false,
        },
        cartData: payload,
      };
    }
    case POST_DATA_ERROR: {
      return {
        ...state,
        postCData: {
          ...state.postCData,
          loading: false,
          success: false,
          error: true,
        },
      };
    }
    case DELETE_DATA_LOADING: {
      return {
        ...state,
        deleteCData: {
          ...state.deleteCData,
          loading: true,
          success: false,
          error: false,
        },
        cartData: payload,
      };
    }
    case DELETE_DATA_SUCCESS: {
      return {
        ...state,
        deleteCData: {
          ...state.deleteCData,
          loading: false,
          success: true,
          error: false,
        },
        cartData: payload,
      };
    }
    case DELETE_DATA_ERROR: {
      return {
        ...state,
        deleteCData: {
          ...state.deleteCData,
          loading: false,
          success: false,
          error: true,
        },
        cartData: payload,
      };
    }
  
    case INC_DATA: {
      return { ...state, count: state.count + payload };
    }
    case DEC_DATA: {
      return { ...state, count: state.count - payload };
    }
    case CLEAR_DATA: {
      return {
        ...state,
        cartData: [],
      };
    }
    default: {
      return state;
    }
  }
};
