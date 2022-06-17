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
} from "./cart.types";

const initState = {
  getData: {
    loading: false,
    success: false,
    error: false,
  },
  postData: {
    loading: false,
    success: false,
    error: false,
  },
  patchData: {
    loading: false,
    success: false,
    error: false,
  },
  deleteData: {
    loading: false,
    success: false,
    error: false,
  },
  cartData: [],
  count: 0,
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING: {
      return {
        ...state,
        getData: {
          ...state.getData,
          loading: true,
          success: false,
          error: false,
        },
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        getData: {
          ...state.getData,
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
        getData: {
          ...state.getData,
          loading: false,
          success: false,
          error: true,
        },
      };
    }
    case POST_DATA_LOADING: {
      return {
        ...state,
        postData: {
          ...state.postData,
          loading: true,
          success: false,
          error: false,
        },
      };
    }
    case POST_DATA_SUCCESS: {
      return {
        ...state,
        postData: {
          ...state.postData,
          loading: false,
          success: true,
          error: false,
        },
        cartData: [...state.cartData, payload],
      };
    }
    case POST_DATA_ERROR: {
      return {
        ...state,
        postData: {
          ...state.postData,
          loading: false,
          success: false,
          error: true,
        },
      };
    }
    case PATCH_DATA_LOADING: {
      return {
        ...state,
        patchData: {
          ...state.patchData,
          loading: true,
          success: false,
          error: false,
        },
        cartData: payload,
      };
    }
    case PATCH_DATA_SUCCESS: {
      return {
        ...state,
        patchData: {
          ...state.patchData,
          loading: false,
          success: true,
          error: false,
        },
        data: payload,
      };
    }
    case PATCH_DATA_ERROR: {
      return {
        ...state,
        patchData: {
          ...state.patchData,
          loading: false,
          success: false,
          error: true,
        },
        cartData: payload,
      };
    }
    case DELETE_DATA_LOADING: {
      return {
        ...state,
        deleteData: {
          ...state.deleteData,
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
        deleteData: {
          ...state.deleteData,
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
        deleteData: {
          ...state.deleteData,
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
    default: {
      return state;
    }
  }
};
