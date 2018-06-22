import {NAME_SPACE as NS} from "./Constants";


export const getValue = state=> state[NS].value;
export const getError = state=> state[NS].error;