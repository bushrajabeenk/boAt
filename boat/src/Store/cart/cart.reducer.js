import {
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  POST_DATA_LOADING,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR,
  PATCH_DATA_LOADING,
  PATCH_DATA_SUCCESS,
  PATCH_DATA_ERROR,
  DELETE_DATA_LOADING,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_ERROR,
  INC_DATA,
  DEC_DATA,
} from "./cart/types";

const initState = {
  getData: {
    loading: false,
    error: false,
  },
  postData: {
    loading: false,
    error: false,
  },
  patchData: {
    loading: false,
    error: false,
  },
  deleteData: {
    loading: false,
    error: false,
  },
  data: [],
  count: 0,
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING: {
    }
    case GET_DATA_SUCCESS: {
    }
    case GET_DATA_ERROR: {
    }
    case POST_DATA_LOADING: {
    }
    case POST_DATA_SUCCESS: {
    }
    case POST_DATA_ERROR: {
    }
    case PATCH_DATA_LOADING: {
    }
    case PATCH_DATA_SUCCESS: {
    }
    case PATCH_DATA_ERROR: {
    }
    case DELETE_DATA_LOADING: {
    }
    case DELETE_DATA_SUCCESS: {
    }
    case DELETE_DATA_ERROR: {
    }
    case INC_DATA: {
      return { ...state, count: state.count + payload };
    }
    case DEC_DATA: {
      return { ...state, count: state.count - payload };
    }
    default: {
      return state;
    }
  }
};
