import React, { Component } from 'react';


class Navbar extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="Navbar">
        <p>The mssg = {this.props.user_name}</p>
      </div>
    );
  }
}


export default Navbar;
