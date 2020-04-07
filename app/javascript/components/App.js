import React from "react"
import PropTypes from "prop-types"
import "./App.css"

class App extends React.Component {
  render () {
    
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    
    return (
      <React.Fragment>
        {logged_in?<h3><a href={sign_out_route} >Log Out</a></h3>:<h3><a href={sign_in_route} >Log In</a></h3>}
        <h1 className="test-one">Hello World</h1>
      </React.Fragment>
    );
  }
}

export default App
