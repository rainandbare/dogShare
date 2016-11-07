import React from 'react';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

//Components
import '../sass/App.scss';

//Fonts
import '../font_JustinRoad.scss';
import '../font_HelloPlayground.scss';




var AppLayout = React.createClass({

  getInitialState: function() {
    return {
      currentUser: null,
      currentUserEmail: null,
      currentDog: null,
      loggedIn: false, 
      events: {}
    }
  },
  render: function() {
    if (this.state.loggedIn) {
        return <div>
            <header className="header-main">
              <h2>who's your dog</h2>
            </header>

        { React.cloneElement(this.props.children, {
          events: this.state.events,
          updateState: this.updateState,
          addDog: this.addDog,
          assignDog: this.assignDog,
          currentUser: this.state.currentUserEmail,
          currentDog: this.state.currentDog,
          firebaseRef: this.firebaseRef
          // add any additional props you want your children to have here
          // as well.
        }) }

        <footer>
        <button onClick={ this.signOut }>Sign Out</button>
        </footer>
        </div>
    } else {
      return <div>Loading</div>;
    }
  },
  assignDog: function(dog){
    // console.log("We picked " + dog);
    this.setState({
      currentDog: dog
    })
  },
  signOut: function() {
    firebase.auth().signOut();
  },
  getTime: function(){
    var d = new Date();
    var h = (d.getHours()<10?'0':'') + d.getHours();
    var m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    var time = h + ':' + m;
    // console.log(time);
    return time;
  },
   getDate: function() {
      var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

      var dateObject = new Date();
      var day = daysArray[dateObject.getDay()];
      var month = monthsArray[dateObject.getMonth()];
      var date = dateObject.getDate();

      var theDate = day + ", " + month + " " + date + "th";
      return theDate;
  },
  updateState: function(a, b, c){
    var time = this.getTime();
    var date = this.getDate();
    var event = { event: a,
                  eventType: b,
                  eventNotes: c,
                  eventTime: time,
                  eventDate: date,
                  owner: this.state.currentUser,
                  dog: this.state.currentDog }
    this.firebaseRef.push(event);
  },
  addDog: function(a, b, c){
    var time = this.getTime();
    var date = this.getDate();
    var event = { event: "new-dog",
                  dog: a,
                  picURL: b,
                  users: c,
                  eventTime: time,
                  eventDate: date
                }
    this.firebaseRef.push(event);
  },
  componentWillMount: function() {
   var component = this;
   var currentDog = component.state.currentDog
   firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true, currentUser: user.displayName, currentUserEmail: user.email });
        //if user has more than one dog on their account
        if (currentDog === null){ 
          browserHistory.push('/choose-dog'); 
        } 
      } else {
        browserHistory.push('/login');
      }
    })

   this.firebaseRef = firebase.database().ref("events");
   this.firebaseRef.on("child_added", (dataSnapshot) => {
       // console.log('child added');
       var events = component.state.events;
       events[dataSnapshot.key] = dataSnapshot.val();
       component.setState({
         events:events
       });
    })
  }
})

module.exports = AppLayout;
