import { LOGIN_SUCCESS, LOGIN_ERROR, REGISTER } from "./register.types";


export const register = () => ({
  type: REGISTER,
});

export const login = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginerror = (payload) => ({
    type: LOGIN_ERROR,
    payload
  });