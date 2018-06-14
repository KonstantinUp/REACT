import { createAction } from "redux-actions";
import {actions} from "./constants";




export const tasks = createAction('TASKS');
export const selectCategory = createAction('SELECT_CATEGORY');
