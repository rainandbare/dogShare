import React from 'react';

//Components
import Iconlist from './Iconlist';
import TheDate from './TheDate';


var DogHome = React.createClass({
  render: function() {
    // var events = this.props.events;
    return(<div>
      <main className="dog-home">
      <div>{this.props.currentUser}</div>
      <div>{this.props.currentDog}</div>
       <TheDate />
       {//background url src for profile pic
          }       
          <Iconlist events={ this.props.events }
                    currentDog = {this.props.currentDog} />
           </main>
      </div>
      )
    }
  })
module.exports = DogHome;
