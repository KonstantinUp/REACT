import { createAction } from "redux-actions";
import {actions} from "./constants";



export const showDone = createAction(actions.SHOW_DONE);
export const showAll = createAction(actions.SHOW_ALL);

