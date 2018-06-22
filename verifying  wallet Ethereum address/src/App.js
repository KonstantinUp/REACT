import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import web3 from 'web3'
import {connect} from "react-redux";
import {setValue,setError} from "./task/actions";
import {getValue,getError} from "./task/selectors";
import Popup from 'react-popup';

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

        this.handleChange = this.handleChange.bind(this);
        this.isAddress = this.isAddress.bind(this)
    }



    isAddress () {
        let address = this.props.value;
        var payload;

        if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
             payload = { error: 'Address must start with 0x and should be of 40 characters long'};
            this.props.setError(payload);

        } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {

            // payload = {error: ''};
            // this.props.setError(payload);

            Popup.alert('I am alert, nice to meet you');

        } else {
            // Otherwise check each case
            address = address.replace('0x','');
            console.log(web3);
            var addressHash = web3.utils.sha3(address.toLowerCase());
            payload = {error:'erro11r'};

            for (var i = 0; i < 40; i++ ) {
                // the nth letter should be uppercase if the nth digit of casemap is 1
                if ((parseInt(addressHash[i], 16) > 8 && address[i].toUpperCase() != address[i]) || (parseInt(addressHash[i], 16) <= 8 && address[i].toLowerCase() != address[i])) {


                    this.props.setError(payload);

                    return;
                }
            }
            let payload = {error:''};
            this.props.setError(payload);
        }
    };


    handleChange(event) {
        const payload = { value: event.target.value};
        this.props.setValue(payload);
    }





  render() {
        console.log(this.props.error);
    return (
        <Div>
            {/*<p>Input your address</p>*/}
            <div className="wrapper-form">
                <div className="error">{!this.props.error ? '':this.props.error}</div>
                <div className="wrapper-form_elements">
                    <input placeholder={"0х0000000000000000000000000000000000000000"} className="input" type="text" value={this.props.value} onChange={this.handleChange}/>
                    <button className="button" onClick={ this.isAddress}>далее</button>
                </div>
            </div>
        </Div>
    );
  }
}





const mapDispatchToProps = ({
    setValue,
    setError
});
const mapStateToProps = (state)=>({
    error :getError(state),
    value :getValue(state)
});

export default connect(mapStateToProps,mapDispatchToProps)(App);