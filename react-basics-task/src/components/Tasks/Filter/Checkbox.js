
import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import "./Search.css"
import {connect} from "react-redux";
import {activateCategory} from "../../../core/categories";
import { isDoneShown, showAll, showDone, } from "../../../state";
import {showDoneTasks} from "../../../core";


 class MaterialCheckbox extends React.Component {

     constructor(props){
         super(props);

         this.toShowDoneTasks = this.toShowDoneTasks.bind(this);

     }

    toShowDoneTasks(e) {
        // this.props.location.state.isShownDoneItems = e.target.checked;
        e.target.checked ? this.props. showDoneTasks('true') :  this.props.showDoneTasks('false');
        e.target.checked ? this.props.showDone() :  this.props.showAll()
    }

    render(){
        return (
            <div className="search-checkbox">
                <Checkbox className="checkbox"
                    labelStyle ={{
                        fontFamily: 'Josefin Slab, serif',
                    }}
                    name="StylesOverridingInlineExample"
                    checked={this.props.isChecked}
                    onCheck={this.toShowDoneTasks}
                    label="Show done"
                    style={{
                        width: '100%',
                        margin: '0 auto',
                    }}
                />
            </div>
        )
    }
}



const mapDispatchToProps = ({
    showDone,
    showAll,
    showDoneTasks
});


const mapStateToProps = (state)=>({
    isChecked:isDoneShown(state)
});


export default connect(mapStateToProps,mapDispatchToProps)(MaterialCheckbox);