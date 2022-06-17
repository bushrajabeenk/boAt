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
import axios from "axios";

export const getDataFunc = () => async (dispatch) => {
  dispatch({ type: GET_DATA_LOADING });
  return axios
    .get("http://localhost:1001/oneprodSlider")
    .then((r) => {
      dispatch({ type: GET_DATA_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: GET_DATA_ERROR });
    });
};

export const postDataFunc = (payload) => async (dispatch) => {
  dispatch({ type: POST_DATA_LOADING });
  return axios
    .post("http://localhost:1001/oneprodSlider", payload)
    .then((r) => {
      dispatch({ type: POST_DATA_SUCCESS, payload: r.data });
      dispatch({ type: GET_DATA_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: POST_DATA_ERROR });
    });
};

export const patchDataFunc = (clickedId, isQty) => async (dispatch) => {
  dispatch({ type: PATCH_DATA_LOADING });
  return axios
    .patch(`http://localhost:1001/oneprodSlider/${clickedId}`, {
      quant: `${isQty}`,
    })
    .then((r) => {
      dispatch({ type: PATCH_DATA_SUCCESS, payload: r.data });
      dispatch({ type: GET_DATA_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: PATCH_DATA_ERROR });
    });
};

export const deleteDataFunc = (clickedId) => async (dispatch) => {
  dispatch({ type: DELETE_DATA_LOADING });
  return axios
    .delete(`http://localhost:1001/oneprodSlider/${clickedId}`)
    .then((r) => {
      dispatch({ type: DELETE_DATA_SUCCESS });
      dispatch({ type: GET_DATA_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: DELETE_DATA_ERROR });
    });
};

export const inc_count = () => ({ type: INC_DATA, payload: 1 });

export const dec_count = () => ({ type: DEC_DATA, payload: 1 });
