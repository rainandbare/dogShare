import React from 'react';
import '../sass/Icon.scss';

var Icon = React.createClass({
  render: function() {
    return <div className={ this.props.type + " icon"}>
      <img src={this.props.image} alt={this.props.type}/>
    </div>
  }
});

export default Icon;