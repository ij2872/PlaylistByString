import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './resc/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap';

import MyNav from './components/MyNav';
import DisplayBarContainer from './components/DisplayBarContainer';


// DEBUG

//TEST ARTIST ARRAY
const SongArray = [];
SongArray.push({artist: "Donnie", songTitle: "SundayCandy"});
SongArray.push({artist: "Artist", songTitle: "Song"});


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      PlaylistSongs: [
        { id: 0, artist: "Artist", songTitle: "Song" },
        { id: 1, artist: "Artist2", songTitle: "Song2" },
        { id: 2, artist: "Artist3", songTitle: "Song3" }
      ],
      isEdit: false
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
            <Col md="4" sm="12">
              <DisplayBarContainer title="Playlist Created" data={this.state.PlaylistSongs} button="Edit" buttonDisabled={this.state.isEdit} click={() => editModeEnable()} />            
            </Col>
          { this.state.isEdit ? (
            <Col xs="12">
              <DisplayBarContainer title="Change Song" data={SongArray} color="#0074bc" button="Close" click={() => editModeClose()} />              
            </Col>
          ) : (
            ""
          )}
            
            
            
          </Row>
        </Container>
        
      {/** 
        <DisplayBar artist="donnie trumpet" songTitle="Sunday Candy" editable={true} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      */}
      </div>
    );
  }
}

export default App;
