import React, { Component } from 'react';



const DBStyle = {
    displaybar: {
        backgroundColor: "#222"
    },
    title: {

    },
    artist: {

    }
};

// <Displaybar artist songTitle editable/>
//      artist     =   {String}
//      songTitle  =   {String}
//      editable   =   {true|false}
//  

//@TODO 
//  -Add Glyphicons for Edit icon 
//  -Adjust Width
class DisplayBar extends Component {
  render() {
    return (
        <div className="Displaybar" style={DBStyle.displaybar}>
            <div className="Displaybar-close">
                {this.props.editable === true ? 'Edit' : '' }
            </div>
            <div className="Displaybar-title">
                {this.props.songTitle} 
            </div>
            <div className="Displaybar-artist">
                {this.props.artist}
            </div>
        </div>
    );
  }
}

export default DisplayBar;
