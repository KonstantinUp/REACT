import * as React from "react";
import {FlatButton, TextField} from "material-ui";

import "./AddInputString.css"

export  default class CategoryInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
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
            if(this.props.categoryId){
                this.props.add(e.target.value,this.props.categoryId);
            } else{
                this.props.add(e.target.value,null);
            }

            this.setState({value: ""});
        }
    }

    onClickHandler(){
        if (this.state.value){
            if(this.props.categoryId){
                this.props.add(this.state.value,this.props.categoryId);
            } else{
                this.props.add(this.state.value,null);
            }
        }
        this.setState({value: ""});
    }

    render() {
        let {hint} = this.props;
        return (
            <div className="add-input-string">
                <TextField
                           onChange={ this.handleChange }
                           onKeyPress={ this.handleKeyPress }
                           hintText={hint}
                           value={this.state.value || ""}
                />
                <FlatButton label="Add" onClick={this.onClickHandler}/>
            </div>
        )
    }
}