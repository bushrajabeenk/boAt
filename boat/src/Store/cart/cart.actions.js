import {
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_ERROR,
  INC_DATA,
  DEC_DATA,
} from "./cart.types";
import axios from "axios";

export const getCDataFunc = () => async (dispatch) => {
  dispatch({ type: GET_DATA_LOADING });
  return axios
    .get("http://localhost:1001/oneprodSlider")
    .then((r) => {
      dispatch({ type: GET_DATA_SUCCESS, payload: r.data });
    })
    .catch((err) => {
      dispatch({ type: GET_DATA_ERROR, payload: err });
    });
};

export const deleteCDataFunc = (clickedId) => async (dispatch) => {
  // dispatch({ type: DELETE_DATA_LOADING });
  return axios
    .delete(`http://localhost:1001/oneprodSlider/${clickedId}`)
    .then((r) => {
      dispatch({ type: DELETE_DATA_SUCCESS });
      dispatch({ type: GET_DATA_SUCCESS, payload: r.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_DATA_ERROR, payload: err });
    });
};

export const inc_count = () => ({ type: INC_DATA, payload: 1 });

export const dec_count = () => ({ type: DEC_DATA, payload: 1 });
