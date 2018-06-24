import { createAction } from "redux-actions";

export const setValue = createAction('SET_VALUE');
export const setError = createAction('SET_ERROR');
export const setValid = createAction('SET_VALID');
export const closeAlert = createAction('CLOSE_ALERT');
export const resetError = createAction('RESET_ERROR');
