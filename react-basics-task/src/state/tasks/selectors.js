import {NAME_SPACE as NS} from "./constants";


export const getTodosState = state=> state[NS];
export const getTodoState = (state, id)=> getTodosState(state)[id];
export const isTodoCompleted = (state, id)=> getTodoState(state, id) && getTodoState(state, id).completed;



