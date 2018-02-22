import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './resc/bootstrap.min.css';
import {Container, Row, Col, Input, Button, Form, FormGroup, Label, InputGroup, InputGroupAddon} from 'reactstrap';

import MyNav from './components/MyNav';
import DisplayBarContainer from './components/DisplayBarContainer';
import Displaybar from './components/DisplayBar';
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
      focusIdEdit: 0,
      service: service
    };
    
    // this.state.service.swapPlaylistIndex(0, 1);
    // this.setState({PlaylistSongs: service.getPlaylist()});


    // Binding
    this.playlistSongSelector = this.playlistSongSelector.bind(this);
    this.playlistEditSelector = this.playlistEditSelector.bind(this);
    this.changeMainFocus = this.changeMainFocus.bind(this);
    this.changeEditFocus = this.changeEditFocus.bind(this);
  }




  // Gets the currently selected song from the user created playlist (this.state.PlaylistSongs)
  playlistSongSelector(songId){
    console.log(`app.playlistSongSelecter: songId = ${songId}`);

    // Change the playlist focus of the change song container
    let subPlaylist = this.state.service.getSubPlaylistById(songId);

    // console.log(`App.playlistSongSelector(${songId}) subPlaylist = ${subPlaylist}`);
    this.setState({FullPlaylist: subPlaylist});
  }


  // Render when a user edits the main playlist

  //Changed the focus of the edit song playlist
  playlistEditSelector(editSongId, mainSongId){
    console.log(`app.playlistEditSelector(${editSongId}, ${mainSongId})`);
  }

  changeMainFocus(divId, id){
    console.log(`DisplayBarContainer.getClickedId(${divId}, ${id}) Pressed.`);
    this.playlistSongSelector(id);
    //set default div to edit
    this.setState({focusIdMain: divId});

  }
  changeEditFocus(divId, id){
    console.log(`DisplayBarContainer.getClickedId(${divId}, ${id}) Pressed.`);

    //set default div to edit
    this.setState({focusIdEdit: divId});
    this.state.service.swapPlaylistIndex(this.state.service.getParentIndexFromSongId(id) , divId);

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
              <Form>
                <FormGroup row>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">Enter String</InputGroupAddon>                  
                    <Input id="user-search"/>
                    <InputGroupAddon addonType="append">
                      <Button color="success">Create!</Button>
                    </InputGroupAddon>
                  </InputGroup>               
                </FormGroup>
              </Form>
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
                    let isFocus = (i === this.state.focusIdEdit ? true : false);

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
