import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './resc/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap';
// Add Later: Input, Button, Form, FormGroup, InputGroup, InputGroupAddon


import MyNav from './components/MyNav';
import DisplayBarContainer from './components/DisplayBarContainer';
import MusicService from './MusicService';
import DisplayBar from './components/DisplayBar';



class App extends Component {

  constructor(props){
    super(props);
    let service = new MusicService();


    // ---------------------------
    // |    SERVICE TESTING       |
    service.renderTrackResults();

    // service.printFullPlaylist(0);
    

    // |    SERVICE TESTING END   |
    // ----------------------------

    // ---------------------------
    // |    SERVICE DEBUGGING     |


    // service.log("TEST");
    // service.printPlaylist();
    // console.log(" ");
    // service.removeSong(1);
    // service.removeSong(2);
    // service.addSong("song1212521", "artist1258521");
    // service.changeSong(3, "test");
    // service.printPlaylist();
    

    // |    SERVICE DEBUGGING END   |
    // ----------------------------

    this.state = {
      PlaylistSongs: service.getPlaylist(),
      FullPlaylist : service.getSubPlaylist(0), 
      isEdit: false,
      focusIdMain: 0,
      focusIdEditArray: [],
      service: service
    };
    
    

    // |          Binding          |
    // ----------------------------
    this.playlistSongSelector = this.playlistSongSelector.bind(this);
    this.changeMainFocus      = this.changeMainFocus.bind(this);
    this.changeEditFocus      = this.changeEditFocus.bind(this);
  }


    // | React Component Rendering |
    // ----------------------------
  componentDidMount(){

    // Create empty array onto this.state.focusIdEditArray
    let zeroArray = new Array(this.state.PlaylistSongs.length).fill(0);
    this.setState({focusIdEditArray: zeroArray});
  }

    // |        Functions          |
    // ----------------------------

  /** 
	 * Changes the focus of the Edit Song Container when the user changes the 
   * focus on the main playlist
	 * @param {string} songId - The id of the song Ex: "0WOxhx4hikIsyF3CRPLC8W"
	 */
  playlistSongSelector(songId){
    console.log(`App.playlistSongSelector: songId = ${songId}`);

    // Change the playlist focus of the change song container
    let subPlaylist = this.state.service.getSubPlaylistById(songId);

    // console.log(`App.playlistSongSelector(${songId}) subPlaylist = ${subPlaylist}`);
    this.setState({FullPlaylist: subPlaylist});
  }


  /**
	 * Changes the focus of the main playlist
	 * @param {int} divId - Integer row location
	 * @param {string} id - String id of the song
	 */
  changeMainFocus(divId, id){
    // console.log(`DisplayBarContainer.getClickedId(${divId}, ${id}) Pressed.`);
    this.playlistSongSelector(id);

    //set default div to edit
    this.setState({focusIdMain: divId});
  }
  
  /**
	 * Changes the focus of the Edit playlist 
   * and swaps the selected song from Edit playlist to Main playlist
	 * @param {int} divId - Integer row location
	 * @param {string} id - String id of the song
	 */
  changeEditFocus(divId, id){
    console.log(`App.changeEditFocus(${divId}, ${id}) Pressed.`);
    let parentDivId = this.state.service.getParentIndexFromSongId(id)
    

    //set default div to edit
    // this.setState({focusIdEdit: divId});
    this.state.service.swapPlaylistIndex(parentDivId, divId);

    //Adjust Array in state
    let newEditArray = this.state.focusIdEditArray.slice();
    newEditArray[parentDivId] = divId;

    this.setState({focusIdEditArray: newEditArray}, () => {console.log(`focusIdEditArray[${this.state.focusIdEditArray}]`)});
    
    console.log(`newEditArray[${newEditArray}]`);
  }
  


  render() {

    

    // --- Functions ---
    


    return (
      <div className="App">
        <MyNav user_name="user"/>
        
        <Container className="content">
          <Row>
            {/* Search Bar */}
            <Col xs="12">


              {/*<Form>
                <FormGroup row>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">Enter String</InputGroupAddon>                  
                    <Input id="user-search"/>
                    <InputGroupAddon addonType="append">
                      <Button color="success">Create!</Button>
                    </InputGroupAddon>
                  </InputGroup>               
                </FormGroup>
              </Form>*/}

              
            </Col>

            {/* Song List Container */}
            <Col md="4" sm="12">
              <DisplayBarContainer>
                {

                  this.state.PlaylistSongs.map((songData, i) => {
                    let isFocus = (i === this.state.focusIdMain ? true : false);

                    let component = (<DisplayBar key={songData.id} 
                                                id={songData.id}
                                                divId={i}
                                                artist={songData.artist}
                                                songTitle={songData.songTitle}
                                                focusId={this.state.focusIdMain}
                                                changeFocus={this.changeMainFocus}
                                                isFocus={isFocus}/>);
                    return component;
                  }, this)
                }
              </DisplayBarContainer>

            </Col>

            {/* Edit Song List Container */}  
            <Col md="8" sm="12">

              <DisplayBarContainer>
                {

                  this.state.FullPlaylist.map((songData, i) => {
                    let isFocus = (i === this.state.focusIdEditArray[this.state.service.getParentIndexFromSongId(songData.id)] ? true : false);

                    let component = (<DisplayBar key={songData.id} 
                                                id={songData.id}
                                                divId={i}
                                                artist={songData.artist}
                                                songTitle={songData.songTitle}
                                                focusId={this.state.focusIdMain}
                                                changeFocus={this.changeEditFocus}
                                                isFocus={isFocus}/>);
                    return component;
                  }, this)
                }
              </DisplayBarContainer>       
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
