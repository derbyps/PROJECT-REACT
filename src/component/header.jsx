import React, { Component } from "react";
import "../style/style.css";
import Search from "./search";
import ToolProfil from "./toolProfil";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              className="navbar-brand"
              src={require("../media/mlaku.png")}
              class="navbar-brand"
              style={{ width: "15vmin" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Search {...this.props} />
            <div className="ml-lg-auto mr-lg-5">
              <ToolProfil {...this.props} />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;