import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import Login2 from './components/Login2.js';
import DogHome from './components/DogHome.js';
 import ChooseDog from './components/ChooseDog.js';
import AddDog from './components/AddDog.js';
import AddPoo from './components/AddPoo.js';
import AddFood from './components/AddFood.js';
import AddNote from './components/AddNote.js';
import AddWalk from './components/AddWalk.js';

import AppLayout from './components/AppLayout.js';

import './index.css';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDMOliuMXyCh72K3FMft36feoDLagiJLuE",
    authDomain: "dog-share-app.firebaseapp.com",
    databaseURL: "https://dog-share-app.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "938415895415"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <Router history={ browserHistory }>
      <Route path='/login' component={ Login2 } />
      <Route path="/" component={ AppLayout }>
          <IndexRoute component={ DogHome }/>
          <Route path="/add-walk" component={ AddWalk } />
          <Route path="/add-poo" component={ AddPoo } />
          <Route path="/add-note" component={ AddNote } />
          <Route path="/add-food" component={ AddFood } />
          <Route path="/choose-dog" component={ ChooseDog } /> 
          <Route path="/add-dog" component={ AddDog } />         
      </Route>
  </Router>, document.getElementById('root'));

