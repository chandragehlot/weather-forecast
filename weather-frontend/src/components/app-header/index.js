import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="appHeader__cont">
        <div className="appHeader__logoCont">
          <div className="appHeader__logo">
          <Link to="/weather-home">
            <span className="appHeader__logo_main">City</span>
            <span className="appHeader__logo_sub">Weather forecast</span>
          </Link>
          </div>
        </div>
        <div className="appHeader__profileCont">
          <div className="appHeader__help">
            <Link to="/help">Help</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
