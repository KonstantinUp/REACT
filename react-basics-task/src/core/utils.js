
export let newTaskCreate = ()=> {
    return {
        id: null,
        title: 'New task',
        completed:false,
    }
};



export let newCategoryCreate = ()=> {
    return {
        id: null,
        title: 'New category',
        tasks:[],
        categories:[]
    }
};