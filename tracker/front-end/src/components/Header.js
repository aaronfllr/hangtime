import React, { Component } from "react";

class Header extends Component {
  render() {
    const titleStyle = {
      font: "palatino",
    }
    return (
      <div style={titleStyle} className="text-center">
        <h1>Aaron</h1>
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>Hangtime Recoder</h1>
      </div>
    );
  }
}

export default Header;
