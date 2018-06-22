import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import web3 from 'web3'
import {connect} from "react-redux";
import {setValue,setError} from "./task/actions";
import {getValue,getError} from "./task/selectors";

const Div = styled.div`
  font-size: 15px;
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;
`;



class App extends Component {

    isAddress () {
        let address = this.props.value;
        console.log(typeof address);
        if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {

            let payload = { error: 'error222'};

            this.props.setError(payload);

        } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
            // If it's all small caps or all all caps, return true

            let payload = { error: 'error333'};
            this.props.setError(payload);
        } else {
            // Otherwise check each case
            address = address.replace('0x','');
            console.log(web3);
            var addressHash = web3.utils.sha3(address.toLowerCase());

            for (var i = 0; i < 40; i++ ) {
                // the nth letter should be uppercase if the nth digit of casemap is 1
                if ((parseInt(addressHash[i], 16) > 8 && address[i].toUpperCase() != address[i]) || (parseInt(addressHash[i], 16) <= 8 && address[i].toLowerCase() != address[i])) {

                    let payload = { error: 'erro11r'};

                    this.props.setError(payload);
                }
            }
            let payload = { error: 'asdas'};

            this.props.setError(payload);
        }
    };


    handleChange(event) {
        const payload = { value: event.target.value};
        this.props.setValue(payload);
    }





  render() {
        console.log(this.state);
    return (
        <Div>
            <p>Input your address</p>
            <div>{!this.props.error ? '':this.props.error}</div>
            <input placeholder={"0х0000000000000000000000000000000000000000"} className="input" type="text" value={this.props.value} onChange={this.handleChange.bind(this)}/>
            <button className="button" onClick={ this.isAddress.bind(this)}>далее</button>
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