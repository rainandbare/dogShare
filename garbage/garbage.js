import React from 'react';

//Components
import Iconlist from './Iconlist.js';
import Dog from './Dog.js';
// import '../sass/App.scss';


var MainApp = React.createClass({
  getInitialState: function() {
    return {
      date: "Thursday, Oct 13th"
    }
  },
  render: function() {
    return ( <div>
        <main className="dog-choice">
          <ul className="dog-options">
            <li>
              <Dog url="https://static.pexels.com/photos/7720/night-animal-dog-pet-medium.jpg"
                   name="Ralph"/>
            </li>
            <li>
              <Dog url="https://static.pexels.com/photos/169524/pexels-photo-169524-medium.jpeg"
                   name="Suzy"/>
            </li>
            <li>
              <Dog url="https://static.pexels.com/photos/171297/pexels-photo-171297-medium.jpeg"
                   name="Dexter"/>
            </li>
            <li>
              <Dog url="http://cdn.akc.org/cockapoo-2.jpg"
                   name="Chimino"/>
            </li>
          </ul>
        </main>
          { //if signed in and you only have one dog, or you have chosen your dog        
          }
        <main className="dog-home">
        <div id="date"><h2>{this.state.date}</h2></div>
        {//background url src for profile pic
        }          
        <Iconlist />
        </main>
          { //if you want to add something to your dog     
          }
        <main className="dogs-add">
        <div id="date"><h2>{this.state.date}</h2></div>
        <Iconlist />
        </main>
        { //if you want to add poos to your dog's day   
        }
        <main>
          <div id="date"><h2>{this.state.date}</h2></div>
          <div className="walks icon">
                <svg></svg>
          </div>

          <div>
            
          </div>
        </main>
        { //if you want to add walks to your dog's day   
        }
        { //if you want to add notes to your dog's day   
        }
        { //if you want to add food to your dog's day   
        }
          { //if you want to see a summary of your dog's day   
          }
        <main className="dogs-day">
        </main>
    </div>
    );
  }
})

module.exports = MainApp;
