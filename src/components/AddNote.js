import React from 'react';
import TheDate from './TheDate';
import { browserHistory } from 'react-router';

//Components
import Icon from './Icon.js';
// import '../sass/App.scss';

import noteIcon from '../assets/notes.png';

var AddNote = React.createClass({
  getInitialState: function() {
    return {
      notes: null
    }
  },
  render: function() {
    return ( <div>
      <main className="dogs-add">
       <TheDate />
        <div id="date"><h2>{ this.state.date }</h2></div>
             <Icon type="note"
                   image={ noteIcon }/>
        <div>
          <label>
            What do you need to say?
            <textarea onChange={ this.updateNotes }/>
          </label>
          <input type="submit" value="Add Note" onClick={ this.updateMainState}/>
        </div>
      </main>
    </div>
    );
  },
 updateNotes: function(event) {
    console.log(event.target.value);
    this.setState({ notes: event.target.value });
  },
 updateMainState: function(){
    this.props.updateState("note", "n/a", this.state.notes);
    browserHistory.push("/");
  }
})

module.exports = AddNote;
