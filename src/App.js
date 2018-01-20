import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './resc/bootstrap.min.css';

import MyNav from './components/MyNav';
import DisplayBarContainer from './components/DisplayBarContainer';


// DEBUG

//TEST ARTIST ARRAY
const SongArray = [];
SongArray.push({artist: "Donnie", songTitle: "SundayCandy"});
SongArray.push({artist: "Artist", songTitle: "Song"});


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNav user_name="user"/>
        <DisplayBarContainer data={SongArray}/>
        

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
