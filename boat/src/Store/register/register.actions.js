import { LOGIN, REGISTER } from "./register.types";

export const register = () => ({
  type: REGISTER,
});

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

// export const loginerror = (payload) => ({
//     type: LOGIN_ERROR,
//     payload
//   });
