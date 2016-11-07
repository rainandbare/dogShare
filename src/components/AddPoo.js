import React from 'react';
import { browserHistory } from 'react-router';
//Component
import Icon from './Icon.js';
// import '../sass/App.scss';

import pooIcon from '../assets/poos.png';
import TheDate from './TheDate';


var AddPoo = React.createClass({
  getInitialState: function() {
        return {
      pooNotes: null,
      pooType: "regular"
    }
  },
  render: function() {
    return ( <div>
        <main className="dogs-add">
        <TheDate />
        <Icon type="poo"
              image={ pooIcon }/>
         <div>
            <label>
            What kind of poo?              
            <select onChange={ this.updatePooType }>
                <option value="Regular">Regular</option>
                <option value="Soft">A Little Soft</option>
                <option value="Constipated">A Little Too Much Work</option>
                <option value="Undefinable - See Notes">Other</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Poo Notes
              <textarea onChange={ this.updatePooNotes }/>
            </label>
          </div>
          <input type="submit" value="Add Poo" onClick={ this.updateMainState }/>
        </main>
    </div>
    );
  },
  updatePooNotes: function(event) {
    console.log(event.target.value);
    this.setState({ pooNotes: event.target.value });
  },
  updatePooType: function(event) {
    console.log(event.target.value);
    this.setState({ pooType: event.target.value });
  },
  updateMainState: function(){
    this.props.updateState("poo", this.state.pooType, this.state.pooNotes);
    browserHistory.push("/");
  }
})

module.exports = AddPoo;
