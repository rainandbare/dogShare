import React from 'react';

//Components
import Iconlist from './Iconlist';
import TheDate from './TheDate';


var DogHome = React.createClass({
  render: function() {
    var events = this.props.events;
    return(<div>
      <main className="dog-home">
       <TheDate />
       {//background url src for profile pic
          }       
          <Iconlist events={ this.props.events } />
           </main>
      </div>
      )
    }
  })
module.exports = DogHome;
