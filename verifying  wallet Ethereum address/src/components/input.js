import React, { Component } from 'react';
import './input.css';

export default class InputComponent extends Component {
    render(){
        return(
            <div className="wrapper-form">
                <div className="error">{this.props.error}</div>
                <div className="wrapper-form_elements">
                    <input placeholder={"0х0000000000000000000000000000000000000000"} className="input" type="text" value={this.props.value} onChange={this.props.handleChange} onFocus={this.props.onFocus}/>
                    <button className="button" onClick={ this.props.validAddress}>далее</button>
                </div>
            </div>
        )
    }
}