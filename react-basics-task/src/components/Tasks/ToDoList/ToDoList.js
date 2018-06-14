
import React from 'react';
import TaskInput from '../../common/AddInputString/AddInputString';
import ToDoItem from '../ToDoItem/ToDoItem';
import {connect} from "react-redux";
import {addTask, getTodoList} from '../../../core'




 class ToDoList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            toDo:'Enter category title',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            task: e.target.value,
        })
    }


    render(){


        const togoItems = this.props.todoList.map((todo)=>{
            return <ToDoItem  key ={todo.id}{...todo}/>
        });

        return (
                <div className="tasks">
                    <TaskInput  hint={"Enter item title"} add={this.props.addTask} categoryId={this.props.match.params.id}/>
                    <div className="task-list">
                        {togoItems}
                    </div>
                </div>

        )

    }
}

const mapDispatchToProps = ({
    addTask
});

const mapStateToProps =(state,props)=> ({
    todoList: getTodoList(state,props.match.params.id)
});

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList)

