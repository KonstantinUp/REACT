import { getLocation } from "react-router-redux";
import {isDoneShown, getTodosState} from "../state";
import {searchKey} from "./constants";
import {selectedCategory} from "../state/categories";
import {
    categoriesList, categoriesMap, getCategoryInitialIds, getCategoryTodoIds, getCommonState, getTasksMap,
    subCategories
} from "../state/common";



export const calculateDonePercentage =(state) =>{
 // debugger;
    const todosState = getTodosState(state);

    let todosCount = Object.keys(getTasksMap(state)).length;
    let doneTodoCount = 0;

    Object.keys(todosState).forEach((item) => {
        if (todosState[item].completed === true) {
            doneTodoCount += 1;
        }
    });
    return Math.round(100 * doneTodoCount / todosCount);
};

export const isCategorySelected =(state,idCategory) =>{

   return idCategory == selectedCategory(state);
};

export const isNotChildrenTreeEmpty = (state,idCategory,parentId)=>{

   // let subCategoriesMap =  subCategories(state);
    // debugger;
    // if(parentId){
    //     return  subCategories(state)[idCategory].categories.map((categoryId)=> subCategoriesMap[categoryId]);
    // }else {
    // let a = categoriesMap;
    //  console.log(idCategory);
     // debugger;
        return categoriesMap(state)[idCategory].categories.map((categoryId) => categoriesMap(state)[categoryId]);
    // }
};


export const  getTasksbyCategoryId =(state,idCategory) =>{

    let taskMap = getTasksMap(state);

    return  getCategoryTodoIds(state,idCategory).map((todoId)=> taskMap[todoId])

};


export const getTodoList =(state,categoryId)=>{



    const searchParams = new URLSearchParams(getLocation(state).search);
    let tasksFindString = searchParams.get(searchKey);
    const todosState = getTodosState(state);
    const showDone = isDoneShown(state);



      if(!categoriesMap(state)[categoryId]){

      }
    let todoList = getTasksbyCategoryId(state,categoryId);

    if(showDone) {



        let arr =[];

        for (let key in todosState) {
           if( todosState[key].completed == true) {
               arr.push(key);
           }
        }


        let arrLength = arr.length -1;


        let todoFilter = todoList.filter(function(todo) {  /*isCheckedTodos in current category*/
            for (let i=0;i<=arrLength;i++){
                if(arr[i] == todo.id){
                    return true
                }
            }

        });

        if(todoFilter.length !==0 && tasksFindString){

           let tasksFindStringlength = tasksFindString.length;

            let Filter = todoFilter.filter(function(todo) {
                let countLength = tasksFindStringlength;

               let  todoTitleLength =  todo.title.length;
                if(tasksFindStringlength >  todoTitleLength){
                    return false
                }
                for (let i=0;i<tasksFindStringlength;i++){

                    countLength--;

                    if(tasksFindString[i] != todo.title[i]){
                        return false
                    } else {
                        if(!countLength){
                            return  true
                        }
                    }
                }

            });

            return Filter;

        } else{ if(todoFilter.length === 0 && tasksFindString){

            let tasksFindStringlength = tasksFindString.length;

            let Filter = todoList.filter(function(todo) {
                let countLength = tasksFindStringlength;

                let  todoTitleLength =  todo.title.length;
                if(tasksFindStringlength >  todoTitleLength){
                    return false
                }
                for (let i=0;i<tasksFindStringlength;i++){

                    countLength--;

                    if(tasksFindString[i] != todo.title[i]){
                        return false
                    } else {
                        if(!countLength){
                            return  true
                        }
                    }
                }

            });

            return Filter;
        }

        }

        if(todoFilter.length === 0){
            return todoList ;
        }

        return todoFilter
    }  else{ if(tasksFindString){

        let tasksFindStringlength = tasksFindString.length;

        let Filter = todoList.filter(function(todo) {
            let countLength = tasksFindStringlength;

            let  todoTitleLength =  todo.title.length;
            if(tasksFindStringlength >  todoTitleLength){
                return false
            }
            for (let i=0;i<tasksFindStringlength;i++){

                countLength--;

                if(tasksFindString[i] != todo.title[i]){
                    return false
                } else {
                    if(!countLength){
                        return  true
                    }
                }
            }

        });

        return Filter;

    }

        return todoList;
    }

};

 export function getCategoryList(state){

    let categories =  categoriesMap(state);
    // let b = state;
    // let a = getCategoryInitialIds;
    // debugger;
   let categoryArr = getCategoryInitialIds(state).map((categoryInitialId)=> categories[categoryInitialId]);
    // console.log(categoryArr);
    let categoryArrLength = categoryArr.length-1;
// debugger;
    for (let i = 0; i < categoryArrLength; i++){
        for (let j = 0; j < categoryArrLength-i; j++) {
        if (categoryArr[j+1].id > categoryArr[j].id) {
            let next = categoryArr[j+1];
            categoryArr[j+1] = categoryArr[j];
            categoryArr[j] = next; }
      }
    }
    return categoryArr;
}