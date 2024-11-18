import { AUTHENTICATE, Log_In } from "./constants";

const LogInAction = (data) => {
  return { type: Log_In, payload: data };
};

const authenticateAction = (token) => {
  return {
    type: AUTHENTICATE,
    payload: token,
  };
};

export { LogInAction, authenticateAction };
