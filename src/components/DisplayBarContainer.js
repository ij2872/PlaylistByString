import React, { Component } from 'react';
import DisplayBar from './DisplayBar';
import { 
        Button,
        Row,
        Col } from 'reactstrap';




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
        padding: "10px 0px 5px 0"
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
//                            color:        {String},
//                            button:       {String}
//                      }       
//  
class DisplayBarContainer extends Component {
  render() {
    return (
        <div className="DisplaybarContainer" style={DBStyle.container}>
            <div className="DisplaybarContainer-title" style={DBStyle.title}>{this.props.title}</div>
            {
                this.props.data.map((d) => {
                    return <DisplayBar key={d.artist} artist={d.artist} songTitle={d.songTitle}/>;
                })
            }
            <div className ="DisplaybarContainer-footer" style={DBStyle.footer}>
            {
                //if button is requested
                this.props.button 
                ?   <Row> 
                        <Col xs="10"></Col> 
                        <Col xs="2">
                            <Button className="Displaybar-button"  size="sm" color="info">
                                {this.props.button}
                            </Button>
                        </Col>
                    </Row>
                    
                : ""
            }
            </div>
            
        </div>
    );
  }
}




export default DisplayBarContainer;
