import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './resc/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap';

import MyNav from './components/MyNav';
import DisplayBarContainer from './components/DisplayBarContainer';
import MusicService from './MusicService';



class App extends Component {

  constructor(props){
    super(props);




    // MusicService.log();
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
      focusId: 1
    };

  }



  

  render() {

    

    // --- Functions ---
    //Open Playlist Editor
    const editModeEnable = () =>{
      this.setState({isEdit: true});
    }
    const editModeClose = () =>{
      this.setState({isEdit: false});
    }


    return (
      <div className="App">
        <MyNav user_name="user"/>
        <Container className="content">
          <Row>
          {/* Search Bar */}
            <Col xs="12">
              <div></div>
            </Col>

            <Col md="4" sm="12">
              <DisplayBarContainer 
                title="Playlist Created" data={this.state.PlaylistSongs} 
                button="Edit" buttonDisabled={this.state.isEdit}
                isEdit={this.state.isEdit} 
                click={() => editModeEnable()} 
              />            
            </Col>
            
          { this.state.isEdit ? (
            <Col md="8" sm="12">
              <DisplayBarContainer title="Change Song" data={this.state.FullPlaylist} color="#0074bc" keyModifier={24} />              
            </Col>
          ) : (
            ""
          )}
            
            
            
          </Row>
        </Container>
        

      </div>
    );
  }
}

export default App;
