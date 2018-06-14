import {push} from "react-router-redux";
import {searchKey} from "./constants";
import { getLocation } from "react-router-redux";
import {newCategoryCreate, newTaskCreate} from "./utils";
import {setTasks, setCategories, categoriesList, getTasksMap, categoriesMap, getTodosState} from "../state";
import {
    getCategoryInitialIds, getInitialCategoriesIds, setInitialCategories, setSubCategories,
    subCategories
} from "../state/common";
import {todosStateRefresh} from "../state/tasks";







export const showDoneTasks = (flag)=> (dispatch, getState) => {
    dispatch(push('?showDoneTasks='+flag));
};

export const findTask = (string)=> (dispatch, getState) => {
    dispatch(push(`?${searchKey}=${string}`))
};



export const categoryDelete = (categoryId,parentId)=> (dispatch,getState) => {
    let todosState = Object.assign({}, getTodosState(getState()));
    console.log(getTodosState(getState()));
    let copyCategoryMap = Object.assign({}, categoriesMap(getState()) );
    let copyTasksMap = Object.assign({},getTasksMap(getState()));
    let copyInitialCategoriesIds = Object.assign([], getCategoryInitialIds(getState()));


        function req (categoryId) {
            debugger;
            let tasksArr= copyCategoryMap[categoryId].tasks;
            tasksArr.forEach(function(item) {delete copyTasksMap[item];});
            tasksArr.forEach(function(item) {
                if( todosState[item]){
                 delete todosState[item];
                }
            });

            copyInitialCategoriesIds.forEach(function (item,i) {
                if(item == categoryId){
                    copyInitialCategoriesIds.splice(i, 1);
                }
            });
            if(parentId != null){
                copyCategoryMap[parentId].categories.forEach(function (item,i) {
                    if(item == categoryId){
                        copyCategoryMap[parentId].categories.splice(i, 1);
                    }
                });
            }
            if(copyCategoryMap[categoryId].categories == false){
                delete copyCategoryMap[categoryId];
                return ;
            } else{
                let categoriesIds = copyCategoryMap[categoryId].categories;
                delete copyCategoryMap[categoryId];
              return   categoriesIds.forEach(function (item) {
                                  req(item);
                })

            }
        }
         req(categoryId);

    let currentPath = getLocation(getState()).pathname;
    let pathArr = currentPath.split('/');

     if(pathArr[2] == categoryId ){
         dispatch(push('/'));
     }

    dispatch(todosStateRefresh(todosState));
    dispatch(setInitialCategories(copyInitialCategoriesIds));
    dispatch(setTasks(copyTasksMap));
    dispatch(setCategories(copyCategoryMap));
};


export const addTask = (string,categoryId)=> (dispatch,getState) => {

    let  newTask = newTaskCreate();
    newTask.id = Math.round(Math.random() * 10000);
    newTask.title = string;

    let copyTasksMap = Object.assign({},getTasksMap(getState()) );
    copyTasksMap[newTask.id] = newTask;
    dispatch(setTasks(copyTasksMap));

    let copyCategoryMap = Object.assign({}, categoriesMap(getState()) );
    copyCategoryMap[categoryId].tasks.unshift( newTask.id);
    dispatch(setCategories(copyCategoryMap));
};


let counter=3;
export const addCategory = (string,parentId)=> (dispatch,getState) => {

    let  newCategory = newCategoryCreate();
    newCategory.id = ++counter;
    newCategory.title = string;

    let copyCategoryMap = Object.assign({}, categoriesMap(getState()) );
    let copyInitialCategoriesIds = Object.assign([], getCategoryInitialIds(getState()));


    if (parentId != null) {

        copyCategoryMap[parentId].categories.unshift(newCategory.id);
        copyCategoryMap[newCategory.id] =  newCategory;
        dispatch(setCategories(copyCategoryMap));

        // let copySubCategories = Object.assign({},subCategories(getState()));
        //
        // dispatch(setSubCategories(copySubCategories));
    } else {
        copyInitialCategoriesIds.unshift(newCategory.id);
        copyCategoryMap[newCategory.id] = newCategory;

        dispatch(setInitialCategories(copyInitialCategoriesIds));
        dispatch(setCategories(copyCategoryMap));
    }

};

export const editCategory=(newTitle, categoryId)=>(dispatch,getState)=>{

    let copyCategoryMap = Object.assign({}, categoriesMap(getState()) );
    copyCategoryMap[categoryId].title = newTitle;

    dispatch(setCategories(copyCategoryMap));
};