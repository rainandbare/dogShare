import React from 'react';
import { Link } from 'react-router';
import Icon from './Icon';
import TheDate from './TheDate' 
import pooIcon from '../assets/poos.png';
import walkIcon from '../assets/walks.png';
import foodIcon from '../assets/food.png';
import noteIcon from '../assets/notes.png';

import $ from 'jquery';

var Note = React.createClass({
	render: function() {
		return (<div>
			<div>
				<p className="note">{ this.props.note }</p>
			</div>
		</div>
			)
	}
})
var Poo = React.createClass({
		render: function() {
		return (
			<div>
				<p className="poo">A { this.props.type } poo</p>
				<p className="note">{ this.props.note }</p>
			</div>
			)
	}
})
var Walk = React.createClass({
		render: function() {
		return (
			<div>
				<p className="walk">A { this.props.length } min { this.props.type } walk</p>
			</div>
			)
	}
})
var Food = React.createClass({
		render: function() {
			if (this.props.note === "human"){
					return ( <div>
					<p className="food">{ this.props.amount }</p>
				 </div>)
				} else if (this.props.note === "dog"){
				return ( <div>
					<p className="food"> { this.props.amount } cup of { this.props.note } food </p>
				 </div>)
				} else if (this.props.note === "treat"){
				return ( <div>
					<p className="food"> { this.props.amount } treat! </p>
				 </div>)
				}
	}
})

var Item = React.createClass({
	
	render: function() {
		var count=0;
		var lastTime=null;
		var events = this.props.events;
		var date = this.getDate();
		var currentDog = this.props.currentDog;
		return (
			<li className={ this.props.type }>
              <div className="flex-group">
              		     { <div>{ Object.keys(events).map((id) => {
		              		if ( events[id].event === this.props.type && events[id].eventDate === date  &&  events[id].dog === currentDog){
		              			//console.log(events[id].eventTime);
          					    var timeArray = [];
          					    timeArray.push(events[id].eventTime);
          					    lastTime = timeArray.pop();
            			   }
         				 })}
        				</div>    
        			 }
	              <div className="latest-time less"><h6>{ lastTime }</h6></div>
	              <button onClick={ this.open }>
	              <Icon type={ this.props.type }
	                    image={ this.props.image }
	                     />
	              </button>

	              <div className="newsfeed more">
		              <ul>
		              	{ <div>{ Object.keys(events).map((id) => {
		              		// console.log(events[id].eventDate);
		              		// console.log(this.props.date)
		              		if ( events[id].event === this.props.type && events[id].eventDate === date  &&  events[id].dog === currentDog){
		      				  if ( this.props.type === "walk" ){
		      				  	return <li key={ id } className="event">
		      				  	<div>
									<p className="time">{ events[id].eventTime }</p>
									<p className="owner">with { events[id].owner }</p>
								</div>
		      				  	<Walk length={ events[id].eventNotes } 
		      				  		  type={ events[id].eventType } />
		      				  	</li>
		      				  } else if ( this.props.type === "poo" ){
		      				  	return <li key={ id } className="event">
		      				  	<div>
									<p className="time">{ events[id].eventTime  }</p>
									<p className="owner">with { events[id].owner }</p>
								</div>
		      				  	<Poo type={ events[id].eventType } 
		      				  		 note={ events[id].eventNotes } 
		      				  		 />
		      				  	</li>
		      				  } else if ( this.props.type === "food" ){
		      				  	return <li key={ id } className="event">
		      				  	<div>
									<p className="time">{ events[id].eventTime  }</p>
									<p className="owner">with { events[id].owner }</p>
								</div>
		      				  	<Food amount={ events[id].eventNotes }
		      				  		  note={ events[id].eventType }  />
		      				  	</li>
		      				  } else if ( this.props.type === "note" ){
		      				  	return <li key={ id } className="event">
		      				  	<div>
									<p className="time">{ events[id].eventTime  }</p>
									<p className="owner">with { events[id].owner }</p>
								</div>
		      				  	<Note note={ events[id].eventNotes } />
		      				  	</li>
		      				  }
            			    }
         				 })}
        				</div> }
		              </ul>
		              <Link className="icon" to={ this.props.link }>+</Link>
	              </div>
              </div>
              { <div>{ Object.keys(events).map((id) => {
		              		if ( events[id].event === this.props.type && events[id].eventDate === date  &&  events[id].dog === currentDog){
		              			count = count + 1;
		              		}
         				 })}
        				</div>    
        			 }
              <div className="daily-total less"><h4>{ count }</h4></div>
            </li>
			)
	},
	open: function(){
		this.close();
		//close any open div.more
		// $("div.more").toggleClass("show");
		var type = this.props.type 
		$("li." + type + " div.more").toggleClass("show");
		$("li." + type + " div.less").toggleClass("hidden");
	 	// console.log("OPEN ME");
 	},
 	close: function(){
 		$("div.more").removeClass("show");
 		$("div.less").removeClass("hidden");
 	},
 	getDate: function() {
      var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

      var dateObject = new Date;
      var day = daysArray[dateObject.getDay()];
      var month = monthsArray[dateObject.getMonth()];
      var date = dateObject.getDate();

      var theDate = day + ", " + month + " " + date + "th";
      return theDate;
  }
})


var Iconlist = React.createClass({
  render: function() {
    return (
		<ul className="icon-list">
			<Item type="poo"
				  image={pooIcon}
				  link="/add-poo"
				  events={ this.props.events }
				  />
			<Item type="walk"
				  image={walkIcon}
				  link="/add-walk"
				  events={ this.props.events }
				  />
			<Item type="food"
				  image={foodIcon}
				  link="/add-food"
				  events={ this.props.events }
				  />
			<Item type="note"
				  image={noteIcon}
				  link="/add-note"
				  events={ this.props.events }
				   />
 		</ul>
   )
}
});

export default Iconlist;