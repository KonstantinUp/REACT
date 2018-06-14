import React from 'react';
import { IconButton, TextField} from "material-ui";
import { ContentClear} from "material-ui/svg-icons/index";

import "./Search.css"
import {findTask} from "../../../core";
import {connect} from "react-redux";


  class  Search extends React.Component {

    constructor(props){
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.clearSearchString = this.clearSearchString.bind(this);

        this.state = {
            filterString:'Search',
        };

    }

    onChangeHandler(e) {
        this.setState({filterString:e.target.value});

        this.props.findTask(e.target.value);

    }
    clearSearchString() {
        this.setState({filterString: ""});

    }


    render(){
        return (
            <div className="search-input">
                <TextField className="search"
                    id={"search-field"}
                    hintText={"Search"}
                    value={this.state.filterString}
                    onChange={this.onChangeHandler}
                />
                <div className="search-clean-button">
                    {this.state.filterString ?
                        <IconButton>
                            <ContentClear onClick={this.clearSearchString}/>
                        </IconButton>
                        : <IconButton/>}
                </div>
            </div>

        )

    }

}

const mapDispatchToProps = ({
    findTask
});

// const mapStateToProps = (state, props)=>({
//
//     // isTodoCompleted :isTodoCompleted(state, props.id)
// });


export default connect(null,mapDispatchToProps)(Search);