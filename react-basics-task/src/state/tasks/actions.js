import { createAction } from "redux-actions";


export const completeTodo = createAction('COPLETE_TODO');
export const turnBackTodo = createAction('TURNBACK_TODO');
export const todosStateRefresh = createAction('REFRESH_TODOS');
