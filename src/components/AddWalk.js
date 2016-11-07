import React from 'react';
import TheDate from './TheDate';
import { browserHistory, Link } from 'react-router'; 

//Components
import Icon from './Icon.js';
// import '../sass/App.scss';

import walkIcon from '../assets/walks.png';

var AddWalk = React.createClass({
  getInitialState: function(){
    return {
      walkLength: null,
      walkType: "on-leash"
    }
  },
  render: function() {
    return ( <div>
        <main className="dogs-add">
          <TheDate />
          <Icon type="walk"
                image={ walkIcon }/>
          <div>
            <label>
              Walk Length
              <input type="number" onChange={ this.updateWalkLength } />
            </label>
          </div>
          <div>
            <label>
              On Leash
              <input type="radio" value="on-leash" name="leash" onChange={ this.updateWalkType }/>
            </label>
            <label>
              Off Leash
              <input type="radio" value="off-leash" name="leash" onChange={ this.updateWalkType }/>
            </label>
          </div>
          <input type="submit" value="Add Walk" onClick={ this.updateMainState }/>
          <Link to="/">Home test</Link>
        </main>
    </div>
    );
  },
  updateWalkLength: function(event) {
    console.log(event.target.value);
    this.setState({ walkLength: event.target.value });
  },
  updateWalkType: function(event) {
    console.log(event.target.value);
    this.setState({ walkType: event.target.value });
  },
  updateMainState: function(){
    this.props.updateState("walk", this.state.walkType, this.state.walkLength);
    browserHistory.push("/");
  }
})

module.exports = AddWalk;
