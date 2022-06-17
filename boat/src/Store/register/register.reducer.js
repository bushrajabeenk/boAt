import { LOGIN_ERROR, LOGIN_SUCCESS, REGISTER } from "./register.types";

const initState = {
  users: [],
  regUser: null,
};

export const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

