import React from 'react';
import { hashHistory } from '../../config/routes';
import Validation from 'react-validation';
import validator from 'validator';
import validation from './validation';
import  {Component, PropTypes} from 'react';
import { browserHistory } from 'react-router';
import firebase from '../../config/firebase.js';

  class SignIn extends React.Component {
      constructor(props) {
          super(props);
          this.SignIn = this.SignIn.bind(this)
      }
      SignIn(){

                 let signIn = {
                  Email : this.refs.email.value,
                  Password : this.refs.password.value,
              }
              firebase.auth().signInWithEmailAndPassword(signIn.Email,signIn.Password )

              .then((user)=>{
                 browserHistory.push('/Home');
              })
              .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    <div className="alert alert-danger" role="alert">
      <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
      <span className="sr-only">Error:</span>
      &nbsp;{this.state.registerError}
    </div>
    // ...
  });
      }

      render() {
          return (
              <div>
                  <form >
                    <div>
                      <h1>Log in to your account</h1>
                    </div>
                    <div>
                      <label>Email</label><input type="text" ref="email" />
                    </div>
                    <div>
                      <label>Password</label><input type="password" ref="password" />
                    </div>
                    <div>
                      <button type="button" onClick={this.SignIn}>Sign In</button>
                    </div>
                    <div>
                      <button type="button" onClick={this.SignIn}>Forgot Password</button>
                    </div>
                  </form>
              </div>
          );
      }
  }
  export default SignIn;
