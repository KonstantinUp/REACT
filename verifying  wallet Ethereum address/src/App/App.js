import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import {connect} from "react-redux";
import {setValue,setError,getValue,getError,isAlertVisible,resetError} from "../state/input/index";
import isAddress from '../utils/isAddress'
import InputComponent from '../components/input'
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

const Div = styled.div`
  font-size: 15px;
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;
`;

class App extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
        this.handleChange = this.handleChange.bind(this);
        this.validAddress = this.validAddress.bind(this);
        this.onFocus = this.onFocus.bind(this)
    }

    validateAddress(){
        this.props.setError(isAddress(this.props.value))
    }

    handleChange(event) {
        const payload = { value: event.target.value};
        this.props.setValue(payload);
    }

    onFocus () {
        this.props.resetError();
        Alert.closeAll();
    }

    static getDerivedStateFromProps(props, state) {

        if (props.isAlertVisible) {
            Alert.success('<div class="success-message">This Ethereum address is valid </div>', {
                position: 'top',
                effect: 'slide',
                html: true,
                timeout: 'none',
                onClose: ()=> {
                    props.resetError();
                }
            });
        }
        return null;
    }

  render() {
        let error = !this.props.error ? '':this.props.error;
        let value = !this.props.value ? '': this.props.value;
    return (
        <Div>
            <Alert stack={false} />
            <InputComponent error={error} value={value}  onFocus={ this.onFocus } validAddress={this.validateAddress} handleChange={this.handleChange}/>
        </Div>
    );
  }
}

const mapDispatchToProps = ({
    setValue,
    setError,
    resetError
});

const mapStateToProps = (state)=>({
    error :getError(state),
    value :getValue(state),
    isAlertVisible:isAlertVisible(state),

});

export default connect(mapStateToProps,mapDispatchToProps)(App);