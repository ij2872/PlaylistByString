import React, { Component } from 'react';
import DisplayBar from './DisplayBar';
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
//  -
//  -
// <DisplayBarContainer DisplayBar />
//      data      =     {
//                            artist:       {String},
//                            songTitle:    {String},
//                            color:        {String}(true|false),
//                            button:       {String}(true|false)
//                      }       
//  
class DisplayBarContainer extends Component {


    render() {
        return (
            <div className="DisplaybarContainer" style={DBStyle.container}>
                <div className="DisplaybarContainer-title" style={DBStyle.title}>{this.props.title}</div>
                {
                    this.props.data.map((d, i) => {
                        return <DisplayBar key={d.artist + i} id={d.id} artist={d.artist} songTitle={d.songTitle} />;
                    })
                }
                <div className ="DisplaybarContainer-footer" style={DBStyle.footer}>
                {
                    //if button is requested
                    this.props.button 
                    ?   <Button className={"Displaybar-button " + (this.props.buttonDisabled === true ? 'disabled' : ' ')} size="sm" color={DBStyle.button.color} onClick={this.props.click}>
                            {this.props.button}
                        </Button>
                    : ""
                }
                </div>
                
            </div>
        );
  }
}




export default DisplayBarContainer;
