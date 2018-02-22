import React, { Component } from 'react';
// import DisplayBar from './DisplayBar';
import { 
        Button
    } from 'reactstrap';




// --- STYLES ---
const DBStyle = {
    container: {
        width: "100%",
        marginTop: "20px",
        border: "solid rgb(70, 70, 70) 2px",
        borderRadius: "5px"
    },
    title: {
        color: "rgb(150, 150, 150)",
        backgroundColor: "rgb(70, 70, 70)"
    },
    footer: {
        height: "auto",
        backgroundColor: "rgb(70, 70, 70)",
        padding: "10px 5px 5px 0",
        textAlign: "right"
    },
    button: {
        type: "info"
    }
};
// --- END STYLES ---




//@TODO
//  -
//  -
// <DisplayBarContainer 
//      title               = {String} Title of containers header
//      color               = {String} Hex value of color requested
//
//      ---[Functions]---
//      click()             = {function} => Parent.editModeEnable() 
//      songSelect(songId)  = {function} => Parent.playlistSongSelector(songId)
//  
//      data                =     {
//                                  artist:       {String},
//                                  songTitle:    {String},
//                                  color:        {String}(true|false),
//                                  button:       {String}(true|false)
//                                }       
// /> 
class DisplayBarContainer extends Component {
    
    constructor(props){
        super(props);
        

        this.state = {
            focusId: props.divId
        };

            
        // this.props.isEdit ? this.setState({focusId: 0}) : this.setState({focusId: -1})        
        // this.changeFocus   = this.changeFocus.bind(this);
    }



    render() {
        return (
            this.props.children


            // WORKING CODE 
            // <div className="DisplaybarContainer" style={DBStyle.container}>
            //     <div className="DisplaybarContainer-title" style={DBStyle.title}>{this.props.title}</div>

            //     {
            //         /* RENDER Display Bars for each songs in this.state.data */
            //         this.props.data.map((d, i) => {
            //             // console.log(`DisplayBarContainer Render i: ${i}`);
            //             let isFocus = i === this.state.focusId ? true : false;

            //             return <DisplayBar key={d.id} id={d.id} divId={i} artist={d.artist} 
            //             songTitle={d.songTitle} focusId={this.state.focusId} 
            //             changeFocus={this.changeFocus}
            //             isFocus={isFocus}/>
            //         }, this)
            //     }

            //     <div className ="DisplaybarContainer-footer" style={DBStyle.footer}>
            //     {
            //     }
            //     </div>
                
            // </div>
        );
  }
}




export default DisplayBarContainer;
