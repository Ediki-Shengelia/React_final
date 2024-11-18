import {toggleLocalStorage} from '../utils/jwt'
import { AUTHENTICATE, Log_In, log_Out } from "./constants";
import { jwtDecode } from "jwt-decode";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const reducer = (state, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case Log_In:
      const { token } = payload;
      const user = jwtDecode(token);
    toggleLocalStorage(token)
      return { isAuthenticated: true, user };
    case log_Out:
      toggleLocalStorage()
      return { isAuthenticated: false, user: null };
    case AUTHENTICATE: {
      const user = jwtDecode(payload);
      return { isAuthenticated: true, user };
    }
    default:
      return state;
  }
};

export { initialState, reducer };
