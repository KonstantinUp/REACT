import { createAction } from "redux-actions";

export const setValue = createAction('SET_VALUE');
export const setError = createAction('SET_ERROR');

export const resetError = createAction('RESET_ERROR');
