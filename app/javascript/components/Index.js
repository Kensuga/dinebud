import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App logged_in = {this.props.logged_in} sign_in_route = {this.props.sign_in_route} sign_out_route = {this.props.sign_out_route} sign_up_route = {this.props.sign_up_route} current_user = {this.props.current_user} />
  </React.StrictMode>,
  document.getElementById('root')
);