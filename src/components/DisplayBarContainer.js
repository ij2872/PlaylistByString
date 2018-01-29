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
// <DisplayBarContainer DisplayBar />
//      data      =     {
//                            artist:       {String},
//                            songTitle:    {String},
//                            color:        {String}(true|false),
//                            button:       {String}(true|false)
//                      }       
//  
class DisplayBarContainer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            focusId: -1
        };

        this.props.isEdit ? this.setState({focusId: 0}) : this.setState({focusId: -1})        
        this.changeFocus   = this.changeFocus.bind(this);
    }

    changeFocus(id){
        console.log(`getClickedId(${id}) Pressed.`);

        //if in edit mode and div is selected
        if(this.props.isEdit){
            //set default div to edit
            this.setState({focusId: id});
        } else{
            this.setState({focusId: 0});            
        }
    }


    render() {
        return (
            
            <div className="DisplaybarContainer" style={DBStyle.container}>
                <div className="DisplaybarContainer-title" style={DBStyle.title}>{this.props.title}</div>

                {                       
                    /* RENDER Display Bars for each songs in this.state.data */
                    this.props.data.map((d, i) => {
                        let isFocus = false;
                        if(d.id === this.state.focusId){
                            // console.log(`d.id: ${d.id}  this.state.focusId: ${this.state.focusId}`);
                            isFocus = true;
                        }
                        console.log(isFocus);
                        return <DisplayBar key={d.artist + i} id={d.id} artist={d.artist} 
                            songTitle={d.songTitle} focusId={ this.state.focusId} 
                            changeFocus={this.changeFocus} changeStyles={this.changeStyles}
                            isFocus={isFocus}/>;
                    }, this)
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
