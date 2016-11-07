import React from 'react';
import TheDate from './TheDate';
import { browserHistory } from 'react-router';
//Components
import Icon from './Icon.js';
import foodIcon from '../assets/food.png';

var FoodNotes = React.createClass({
  render: function() {
    if ( this.props.type === "dog" ){
          return <label>
              How Many Cups?
              <select onChange={ this.props.updateDogFood }>
                <option value="1/4">Quarter</option>
                <option value="1/2">Half</option>
                <option value="3/4">Three Quarters</option>
                <option value="1">Full</option>
              </select>
            </label>
      } else if ( this.props.type === "human" ){
          return <label>
            What kind?
            <input type="text" onChange={ this.props.updateHumanFood }/>
          </label>

      } else if ( this.props.type === "treat" ){
        return <label>
            How many?
           <select onChange={ this.props.updateTreats }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3?</option>
                <option value="+4">I made the dog sick</option>
            </select>
        </label>
    }
  }
})

var AddFood = React.createClass({
  getInitialState: function() {
    return {
      foodType: "dog",
      human: null,
      treats:"1",
      dog:"0.25"
    }
  },
  render: function() {
    return ( <div>
        <main className="dogs-add">
          <TheDate />
          <Icon type="food"
                image={ foodIcon }/>
           <div>
            <label>
              What Kind of Food?
              <select onChange={ this.updateFoodType }>
                <option value="dog">Dog Food</option>
                <option value="human">Human Food</option>
                <option value="treat">Treat</option>
              </select>
            </label>
          </div>
          <FoodNotes type={ this.state.foodType }
                    updateDogFood={ this.updateDogFood }
                    updateHumanFood={ this.updateHumanFood }
                    updateTreats={ this.updateTreats }/>
          <input type="submit" value="Add Food" onClick={ this.updateMainState } />
        </main>
    </div>
    );
  },
  updateFoodType: function(event) {
    console.log(event.target.value);
    this.setState({ foodType: event.target.value });
  },
  updateDogFood: function(event) {
    console.log(event.target.value);
    this.setState({ dog: event.target.value });
  },
  updateHumanFood: function(event) {
    console.log(event.target.value);
    this.setState({ human: event.target.value });
  },
  updateTreats: function(event) {
    console.log(event.target.value);
    this.setState({ treats: event.target.value });
  },
  updateMainState: function(){
        if (this.state.foodType === "dog"){
        this.props.updateState("food", this.state.foodType, this.state.dog);
      } else if (this.state.foodType === "treat") {
        this.props.updateState("food", this.state.foodType, this.state.treats);
      } else if (this.state.foodType === "human") {
        this.props.updateState("food", this.state.foodType, this.state.human);
      }
  browserHistory.push("/");
  }
})

module.exports = AddFood;
