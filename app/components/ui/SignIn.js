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
    // ...
  });
      }

      render() {
          return (
              <div>
                  <form >
                      <label>Email</label><input type="text" ref="email" />
                      <label>Password</label><input type="password" ref="password" />
                      <button type="button" onClick={this.SignIn}>SignIn</button>
                  </form>
              </div>
          );
      }
  }
  export default SignIn;