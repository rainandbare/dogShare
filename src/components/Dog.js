import React from 'react';
import '../sass/Dog.scss';

var Dog = React.createClass({
  render: function() {
    return <div className="poochPic">
      <label>
      <input type="radio" name="choose-dog" id={this.props.name}/>
        <img src={ this.props.url } alt={ this.props.name } />
        <h3>{ this.props.name }</h3>
      </label>
    </div>
  }
});







// import css from '../sass/Icon.scss';

// const Dog = props => {
//   const classNames = [
//     'dog',
//     props.poop ? css.poop : '',
//     props.walk ? css.walk : '',
//     props.bark ? css.bark : ''
//   ]

//   return (
//     <div className={classNames.join(' ')}>
//       <span>{props.children}</span>
//     </div>
//   )
// }

export default Dog