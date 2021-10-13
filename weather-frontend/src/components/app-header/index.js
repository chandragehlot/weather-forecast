import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class AppHeader extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="app-header">
                <div className="appHeader__cont">
                    <div className="appHeader__logoCont">
                        <div className="appHeader__logo">
                            <div className="appHeader__logo_main">City</div>
                            <div className="appHeader__logo_sub">Weather</div>
                        </div>
                    </div>
                    <div className="appHeader__profileCont">
                        <div className="appHeader__help">
                                { 'Help' }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHeader;