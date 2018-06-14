import {push} from "react-router-redux";


export const activateCategory = (id)=> (dispatch, getState) => {

    dispatch(push('/category/'+id))
};