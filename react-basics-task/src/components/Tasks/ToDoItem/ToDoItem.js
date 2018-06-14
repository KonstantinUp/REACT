import * as React from "react";
import {Checkbox, IconButton, Paper} from "material-ui";
import {EditorModeEdit} from "material-ui/svg-icons/index";
import PropTypes from 'prop-types';


import "./ToDoItem.css"
import {connect} from "react-redux";
import {completeTodo, isTodoCompleted, turnBackTodo} from "../../../state";

class TodoItem extends React.Component {

    constructor(props){
        super(props);

        this.markToShowDone = this.markToShowDone.bind(this);
    };

    // goToEdit(e){
    //     e.stopPropagation();
    //     this.props.router.push("category-list/" + this.state.categoryId + "/edit/" + this.state.data.id);
    // }


    markToShowDone(e) {
        const payload = { todoId: this.props.id };

        e.target.checked ?
            this.props.completeTodo(payload) :
            this.props.turnBackTodo(payload)
    };

    render() {
        return (
            <Paper zDepth={1} children={
                <div className="todo-item">
                    <div className="title">
                        <Checkbox
                            label={this.props.title}
                            checked={this.props.isTodoCompleted}
                            onCheck={this.markToShowDone}
                        />
                    </div>
                    <div className="actions">
                        <div className="edit">
                            <IconButton >
                                <EditorModeEdit />
                            </IconButton>
                        </div>
                    </div>
                </div>
            }/>
        )
    }
}

TodoItem.propTypes ={
    id:PropTypes.number,
    title:PropTypes.string,
    completed: PropTypes.bool,
    completeTodo: PropTypes.func,
    turnBackTodo: PropTypes.func,
    isTodoCompleted:PropTypes.bool,
};

const mapDispatchToProps = ({

    completeTodo,
    turnBackTodo
});

const mapStateToProps = (state, props)=>({

    isTodoCompleted :isTodoCompleted(state, props.id)
});


export default connect(mapStateToProps,mapDispatchToProps)(TodoItem);