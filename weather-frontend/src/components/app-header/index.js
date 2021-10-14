import React, { Component } from 'react';

class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-header">
                <div className="appHeader__cont">
                    <div className="appHeader__logoCont">
                        <div className="appHeader__logo">
                            <span className="appHeader__logo_main">City</span>
                            <span className="appHeader__logo_sub">Weather forecast</span>
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