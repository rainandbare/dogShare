import React from 'react';
import { browserHistory, Link } from 'react-router';

//Components

var ChooseDog = React.createClass({
  render: function() {
    var events = this.props.events
    var currentUser = this.props.currentUser
    //go through the list of events and list out all of the dogs that have an event under that owner
    //remove duplicates
    //Add New Dog - you can create unlimited dogs from your account. Enter their name, link to their photo/upload a photo, owner's email addresses 
    //Add New Owner to a dog - Choose your dog, enter your new owner's email address 
    return ( <div>
        <main className="dog-choice">
        <ul>
        {
          <li>
          {
            Object.keys(events).map((id) =>{
                if (events[id].users !== undefined) {
                    var users = events[id].users;
                    // console.log(currentUser, "currentUser");
                    var a = users.indexOf(currentUser);
                    // console.log(a, "index");
                    if ( a !== -1 ){
                    return <div key={ id } className="event"> 
                              <button onClick={ this.assignDog }>
                                <label>{ events[id].dog }</label>
                                <img id={ events[id].dog } src={ events[id].picURL } alt={ events[id].dog } />
                              </button>
                            </div>
                  }
                }
            })
          }
          </li>  
        }
        </ul>
        <Link className="icon" to="/add-dog">+</Link>
        </main>
    </div>
    );
  },
  assignDog: function(event){
   var dogName = event.target.id
   this.props.assignDog(dogName);
   browserHistory.push("/");
  }
})

module.exports = ChooseDog;
