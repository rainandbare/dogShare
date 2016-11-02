import React, { Component } from 'react';
import firebase from 'firebase';

//Components
import Login from './Login.js';
import MainApp from './MainApp.js';
import '../sass/App.scss';

//Fonts
import '../font_JustinRoad.scss';
import '../font_HelloPlayground.scss';

import pooIcon from '../assets/poos.png';
import walkIcon from '../assets/walks.png';
import foodIcon from '../assets/food.png';
import noteIcon from '../assets/notes.png';

var App = React.createClass({
  getInitialState: function() {


    return {
      currentUser: null,
      loggedIn: false
    }
  },

  render: function() {
    var display;
    if (this.state.loggedIn) {
        display = ( <MainApp /> );
    } else {
        display = ( <Login onLogin={ this.login }/> );
    } 
    return (<div>
      <header className="header-main">
        <h2>who's your dog</h2>
      </header>
      { display }
      </div>
    )
    
  },
  login: function(email){
    console.log("We logged in " + email);
    this.setState({
      currentUser: email,
      loggedIn: true
    })
  }

})

module.exports = App;
