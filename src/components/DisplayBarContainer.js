import React, { Component } from 'react';
import DisplayBar from './DisplayBar';


// <DisplayBarContainer DisplayBar />
//      data      =     {
//                            artist: {String},
//                            songTitle: {String}
//                      }       
//  

//@TODO 
//  -Add borders
//  -Adjust Width
//  -
class DisplayBarContainer extends Component {
  render() {
    return (
        <div>
        {
            this.props.data.map((d) => {
                return <DisplayBar key={d.artist} artist={d.artist} songTitle={d.songTitle}/>;
            })
        }
        </div>
    );
  }
}

export default DisplayBarContainer;
