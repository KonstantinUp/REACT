

import {NAME_SPACE as NS} from "./constants";

export const getCategoriesState = state=> state[NS];
export const selectedCategory = state => getCategoriesState(state).selectedCategory;

