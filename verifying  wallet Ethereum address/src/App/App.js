import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import {connect} from "react-redux";
import {isAlertVisible,closeAlert} from "../state/input/index";
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

    constructor(props) {
        super(props);
        this.state={};
    }

    static getDerivedStateFromProps(props) {
        if (props.isAlertVisible) {
            Alert.success('<div class="success-message">This Ethereum address is valid </div>', {
                position: 'top',
                effect: 'slide',
                html: true,
                timeout: 'none',
                onClose: () => {
                    props.closeAlert();
                }
            });
        }
        return null;
    }

    render() {
        return (
            <Div>
                <Alert stack={false}/>
                <InputComponent/>
            </Div>
        );
    }
}

const mapDispatchToProps = ({
    closeAlert
});

const mapStateToProps = (state) => ({
    isAlertVisible: isAlertVisible(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);