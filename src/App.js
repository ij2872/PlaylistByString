import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './resc/bootstrap.min.css';
import {Container, Row, Col, Input, Button, Form, FormGroup, Label, InputGroup, InputGroupAddon} from 'reactstrap';

import MyNav from './components/MyNav';
import DisplayBarContainer from './components/DisplayBarContainer';
import MusicService from './MusicService';



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

    //DEBUG/TEST
    // service.log("TEST");
    // service.printPlaylist();
    // console.log(" ");
    // service.removeSong(1);
    // service.removeSong(2);
    // service.addSong("song1212521", "artist1258521");
    // service.changeSong(3, "test");
    // service.printPlaylist();
    

    this.state = {
      PlaylistSongs: service.getPlaylist(),
      FullPlaylist : service.getSubPlaylist(2), 
      isEdit: false,
      focusIdMain: 0,
      focusIdEdit: 0,
      service: service
    };
    

    // Binding
    this.playlistSongSelector = this.playlistSongSelector.bind(this);
    this.playlistEditSelector = this.playlistEditSelector.bind(this);

  }




  // Gets the currently selected song from the user created playlist (this.state.PlaylistSongs)
  playlistSongSelector(songId){
    // console.log(`playlistSongSelecter: songId = ${songId}`);

    // Change the playlist focus of the change song container
    let subPlaylist = this.state.service.getSubPlaylistById(songId);

    // console.log(`App.playlistSongSelector(${songId}) subPlaylist = ${subPlaylist}`);
    this.setState({FullPlaylist: subPlaylist});
  }


  //Changed the focus of the edit song playlist
  playlistEditSelector(songId){

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
              <DisplayBarContainer 
                title="Playlist Created" data={this.state.PlaylistSongs} songSelect={this.playlistSongSelector} divId={this.state.focusIdMain}/>            
            </Col>

            {/* Edit Song List Container */}  
            <Col md="8" sm="12">
              <DisplayBarContainer title="Change Song" data={this.state.FullPlaylist} color="#0074bc" songSelect={this.playlistEditSelector} divId={this.state.focusIdEdit}/>              
            </Col>
            
            
            
          </Row>
        </Container>
        

      </div>
    );
  }
}

export default App;
