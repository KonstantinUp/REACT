
import React from 'react';
import {LinearProgress} from "material-ui";

export default  class  Search extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            // donePercentage: this.calculateDonePercentage(),
        };

    }

    // calculateDonePercentage() {
    //     let {todo} = this.props.originalData.entities;
    //     let todoCount = Object.keys(todo).length;
    //     let doneTodoCount = 0;
    //     Object.keys(todo).forEach((item) => {
    //         if (todo[item].isDone === true) {
    //             doneTodoCount += 1
    //         }
    //     });
    //     return Math.round(100 * doneTodoCount / todoCount);
    // }
    //
    //
    // componentWillReceiveProps(){
    //     this.setState({
    //         donePercentage: this.calculateDonePercentage()
    //     })
    // }

    render(){
        return (
            <div className="materialComponentProgress">
                <LinearProgress mode="determinate" color={"#37FF01"} style={{height: '15px', backgroundColor: 'white'}}
                                value={this.props.percentage}              />
            </div>

        )

    }

}