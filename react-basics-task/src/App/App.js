import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import MaterialCheckbox from '../components/Tasks/Filter/Checkbox';
import Search from '../components/Tasks/Filter/Search';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Category from '../components/Categories/CategoryList/CategoryList';
import ToDoList from '../components/Tasks/ToDoList/ToDoList';
import {Route} from "react-router-dom";
import {addCategory, calculateDonePercentage, getCategoryList} from "../core";
import {connect} from "react-redux";

class App extends React.Component {


    // calculateDonePercentage() {
    //     let {todo} = this.props.originalData.entities;
    //     let todoCount = Object.keys(todo).length;
    //     let doneTodoCount = 0;
    //
    //     Object.keys(todo).forEach((item) => {
    //         if (todo[item].isDone === true) {
    //             doneTodoCount += 1;
    //         }
    //     });
    //     return Math.round(100 * doneTodoCount / todoCount);
    // }
    //
    // componentWillReceiveProps() {
    //     this.setState({
    //         donePercentage: this.calculateDonePercentage()
    //     });
    // }


  render() {
      console.log(this.props.donePercentage);
    return (
      <div className="wrapper-body">
          <div className="wrapper-header">
              <Header checkbox ={<MaterialCheckbox   />} search ={<Search {...this.props} />}/>
          </div>
          <div className="ProgressBar">
              {!isNaN(this.props.donePercentage) && <ProgressBar percentage={this.props.donePercentage}/>}
          </div>
          <div className="wrapper-main">
              <Category/>
             <Route path ='/category/:id' component ={ToDoList}  />
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = ({
    // addCategory
});

const mapStateToProps = (state)=> ({
    donePercentage :  calculateDonePercentage(state)
});

export default connect(mapStateToProps,mapDispatchToProps)(App);