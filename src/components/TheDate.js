import React from 'react';

var TheDate = React.createClass({
	render: function() {
		return <div id="date"><h2>{this.getDate()}</h2></div>
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

module.exports = TheDate;
