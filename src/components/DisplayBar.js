import React, { Component } from 'react';



// const DBStyle = {
//     displaybar: {
//         backgroundColor: "#222"
//     },
//     title: {

//     },
//     artist: {

//     }
// };

// <Displaybar artist songTitle editable/>
//      artist     =   {String}
//      songTitle  =   {String}
//      editable   =   {true|false}
//  
// ----- Functions -----
//  
//  focus()
//     - Changes background color of div only if current div === this.props.focusId
//
//
// ----- Parent inher. Functions -----
//  this.props.click(id)
//      - Logs id
//
//  this.props.changeStyles(obj)
//
//@TODO 
//  -Add Glyphicons for Edit icon 
//  -Adjust Width
class DisplayBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            DBStyle: {
                displaybar: {
                    backgroundColor: "#222"
                },
                title: {
            
                },
                artist: {
            
                }
            }
        };

        this.handleClick = this.handleClick.bind(this);
        this.focus = this.focus.bind(this);
    }

    focus(){
        // Change Background color of selected element
        // this.state.DBStyle.displaybar.backgroundColor = "red";
        let dbstyle = this.state.DBStyle;
        
        // console.log(`props.id: ${this.props.id}     focusId: ${this.props.focusId}`);


        this.setState({
            DBStyle: dbstyle
        });
    }
    
    /**
	 * runs App.changeMainFocus(divId, songId) or App.changeEditFocus(divId, songId)
	*/
    handleClick(){
        this.props.changeFocus(this.props.divId, this.props.id);
        // console.log("<DisplayBar>: handleClick() => id = " + this.props.divId);
    }



    render() {

        return (
            <div className={this.props.isFocus ? "Displaybar focus" : "Displaybar"}
                 onClick={this.handleClick} >
                
                <div>{this.props.id}</div>
                <div>{this.props.divId}</div>
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
