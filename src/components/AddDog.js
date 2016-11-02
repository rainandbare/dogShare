import React from 'react';
import { browserHistory } from 'react-router';

var AddDog = React.createClass({
  getInitialState: function() {
    return {
      dogName: null,
      picURL: null,
      newEmail: null,
      ownerEmails: []
    }
  },
  render: function() {
    var emails = this.state.ownerEmails;
    return ( <div>
        <main className="dog-choice">
          {//add new dog
          }
          <div>
            <label>
              Dog Name
              <input type='text' onChange={ this.updateDogName } />
            </label>
          </div>
          <div>
            <label>
              Picture
              <input type='text' onChange={ this.updatePicURL } />
            </label>
          </div>
           <div>
            <label>
              Owner's Email Address'
              <input type='text' onChange={ this.updateNewEmail } />
              <button onClick={ this.addOwnerEmail }>+</button>
            </label>
            <ul>
               { <div>{ Object.keys(emails).map((id) => {
                    return <li key={ id } className="email">
                     { emails[id] }
                     </li>
                 })}
                </div>    
               }
            </ul>
          </div>
          <input type="submit" onClick={ this.addDog } />
        </main>
    </div>
    );
  },
  updateDogName: function(event){
    console.log(event.target.value)
    this.setState({ dogName: event.target.value });
  },
  updatePicURL: function(event){
    console.log(event.target.value)
    this.setState({ picURL: event.target.value });
  },
  updateNewEmail: function(event){
    console.log(event.target.value)
    this.setState({ newEmail: event.target.value });
  },
  addOwnerEmail: function(event){
    console.log(event.target.value)
    var ownerEmails = this.state.ownerEmails
    console.log(ownerEmails);
    ownerEmails.push(this.state.newEmail);
    this.setState({ ownerEmails: ownerEmails});
  },
  addDog: function(){
    this.props.addDog(this.state.dogName, this.state.picURL, this.state.ownerEmails);
    browserHistory.push("/");
  }
})

module.exports = AddDog;
