import React from 'react';
import { browserHistory } from 'react-router';
import firebase from 'firebase';

var Login = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      email: '',
      password: '',
      mode: 'login',
      error: null,
      loggedin: false
    }
  },
  render: function() {
    var signInForm;
    if (this.state.mode === 'login'){
    	signInForm = (<div className="form">  
	     <div>
          <label for='email'>Email</label>
          <input type='text' name='email' value={ this.state.email } onChange={ this.setEmail } />
        </div>
	      <div>
	        <label for='email'>Password</label>
	        <input type='password' name='password' value={ this.state.password } onChange={ this.setPassword } />
	      </div>
      </div>
      );
    } else if (this.state.mode === 'signup'){
    	signInForm = (<div className="form">  
        <div>
	        <label for='name'>Name</label>
	        <input type='text' name='name' value={ this.state.name } onChange={ this.setName } />
	      </div>
	      <div>
	        <label for='email'>Email</label>
	        <input type='text' name='email' value={ this.state.email } onChange={ this.setEmail } />
	      </div>
	      <div>
	        <label for='email'>Password</label>
	        <input type='password' name='password' value={ this.state.password } onChange={ this.setPassword } />
	      </div>
      </div>)
    };
    return (<div>
    	<main className="sign-in">
        <h3>well...who are you?</h3>
        <div className="sign-in-mode">
          <label>
            <input type='radio' value='login' checked={ this.state.mode == 'login' } onChange={ this.setMode } />
            Login
          </label>
          <label>
            <input type='radio' value='signup' checked={ this.state.mode == 'signup' } onChange={ this.setMode } />
            Signup
          </label>
    	  </div>
        { signInForm }
        <input onClick={this.login} className="sign-in" type="submit" value="sign in"/>
      </main>
    </div>
	)
  },
  setName: function(evt) {this.setState({name:evt.target.value});},
  setEmail: function(evt) { this.setState({ email: evt.target.value }); },
  setPassword: function(evt) { this.setState({ password: evt.target.value }); },
  setMode: function(evt){this.setState({ mode: evt.target.value });},
  login:function(){
    console.log('clicked');
    console.log(this, "this in login");
    var component = this;
	  if (this.state.mode === "login"){
      var self = this;
	  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        var user = firebase.auth().currentUser;
        this.props.onLogin(user.displayName);
        browserHistory.push('/home');
      })
      .catch((error) => {
      	// console.log(error);
      })
	  } else if (this.state.mode === "signup"){
	  	firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: this.state.name
        });
        this.props.onLogin(user.displayName);
        browserHistory.push('/home');
      })
      .catch((error) => {
      	// console.log(error.message);
      })
	  }
	}
});

export default Login;