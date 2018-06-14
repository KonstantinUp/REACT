import * as React from "react";
import {Dialog, FlatButton, RaisedButton, TextField} from "material-ui";
import {connect} from "react-redux";
import {addCategory, addTask, editCategory, getTodoList} from "../../../core/index";

// import "./AddInputStringDiaolg.scss"

class AddInputStringDialog extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onCancelHandler = this.onCancelHandler.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.state = {
            value: ""
        }
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && this.state.value) {
            if (this.props.editEntity){
                this.props.toggleEvents.openEditDialog();
                this.props.editCategory(this.state.value, this.props.parentId);
            } else {
                this.props.addCategory(this.state.value, this.props.parentId);
                this.props.toggleEvents.openAddDialog();
            }
            this.setState({value: ""});
        }
    }

    onClickHandler() {
        if (this.state.value) {
            if (this.props.editEntity){
                this.props.toggleEvents.openEditDialog();
                this.props.editCategory(this.state.value, this.props.parentId);
            } else {
                this.props.addCategory(this.state.value, this.props.parentId);
                this.props.toggleEvents.openAddDialog();
            }
            this.setState({value: ""});
        } else {
            if (this.props.editEntity){
                this.props.toggleEvents.openEditDialog();
                this.props.editCategory(this.state.value, this.props.parentId);
            } else {
                this.props.addCategory(this.state.value, this.props.parentId);
                this.props.toggleEvents.openAddDialog();
            }
            this.setState({value: ""});
        }
    }

    onCancelHandler() {

        if (this.props.editEntity){
            this.props.toggleEvents.openEditDialog();
        } else {
            this.props.toggleEvents.openAddDialog();
        }
        this.setState({value: ""});
    }


    componentWillReceiveProps(nextProps){

        this.setState({value : nextProps.editEntity});
    }

    render() {
        let {editEntity, isOpened} = this.props;
        let modalActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.onCancelHandler}
            />,
            <FlatButton
                label={editEntity ? "Edit" : "Add"}
                primary={true}
                onClick={this.onClickHandler}
            />,
        ];

        let dialogTitle = editEntity ? "Edit category" : "Add category";

        return (
            <div className="add-input-string-dialog">
                <Dialog
                    title={dialogTitle}
                    actions={modalActions}
                    modal={true}
                    open={isOpened}
                >
                    <TextField onChange={ this.handleChange }
                               onKeyPress={ this.handleKeyPress }
                               hintText={"Input category title"}
                               value={this.state.value || ""}
                    />
                </Dialog>
            </div>
        )
    }
}

const mapDispatchToProps = ({
    editCategory,
    addCategory
});

const mapStateToProps =(state,props)=> ({
    // todoList: getTodoList(state,props.match.params.id)
});

export default connect(mapStateToProps,mapDispatchToProps)(AddInputStringDialog)
