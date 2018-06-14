import React from 'react';
import "./Header.css"

export default  class  Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            task: '',
        };
    }

    render() {
        let {checkbox,search} = this.props;
        return (
            <div className="header">
                <div className="header-label">
                    <h1>TO-DO List</h1>
                </div>
                <div className="header-filter">
                    {checkbox}
                    {search}
                </div>
            </div>

        )

    }
}