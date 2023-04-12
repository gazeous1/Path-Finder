import React, { Component } from "react";
import { Button } from "./buttons";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Button
                id="start-button"
                className="nav-item btn btn-success"
                href="#"
                onClick={this.props.handleStart}
                tabIndex="-1"
                aria-disabled="true"
              >
                Start
              </Button>
              <Button
                id="reset-button"
                className="nav-item nav-link"
                onClick={this.props.resetGrid}
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Reset
              </Button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
