import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


const Div = styled.div`
  font-size: 15px;
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;
`;

// const Button = styled.div`
//   margin-left:20px;
//   width:70px:
//   height:40px:
//   border:1px solid black
// `;

class App extends Component {
  render() {
    return (
        <Div>
            <p>Input your address</p>
            <input type="text"/>
            <button className="button">далее</button>
        </Div>
    );
  }
}

export default App;
