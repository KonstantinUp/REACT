import React, { Component } from 'react';
import './input.css';
import {getError, getValue, resetError, setError, setValid, setValue} from "../state/input";
import {connect} from "react-redux";
import isAddress from '../utils/isAddress'
import Alert from "react-s-alert";

 class InputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.validateAddress = this.validateAddress.bind(this);
        this.onFocus = this.onFocus.bind(this)
    }

    handleChange(event) {
        let payload = {value: event.target.value};
        this.props.setValue(payload);
    }

    validateAddress() {
        let payload = isAddress(this.props.value);
        payload.validAddress
            ? this.props.setValid(payload)
            : this.props.setError(payload);
    }

    onFocus() {
        this.props.resetError();
        Alert.closeAll();
    }

    render(){
        let error = !this.props.error ? '' : this.props.error;
        let value = !this.props.value ? '' : this.props.value;
        return(
            <div className="wrapper-form">
                <div className="error">{error}</div>
                <div className="wrapper-form_elements">
                    <input placeholder={"0х0000000000000000000000000000000000000000"} className="input" type="text" value={value} onChange={this.handleChange} onFocus={this.onFocus}/>
                    <button className="button" onClick={ this.validateAddress}>далее</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = ({
    setValue,
    setError,
    setValid,
    resetError
});

const mapStateToProps = (state) => ({
    error: getError(state),
    value: getValue(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);