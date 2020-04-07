import React from "react"
import PropTypes from "prop-types"
import {Row, Col} from 'reactstrap'
import {FaBars} from 'react-icons/fa'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'

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
      <span>
        <Row style={{background:"#ffa600", borderBottom: "10px solid #bc7a00"}}>
          <Col sm={1} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <FaBars style={{color:"white", fontSize:"50px", display:"flex",justifyContent:"center"}} />
          </Col>
          <Col sm={9} style={{display:"flex", alignItems:"center", alignItems:"center"}}>
            <h1 className={"pacifico"} style={{color:"white", fontSize:"75px"}}>
              DineBud
            </h1>
          </Col>
          <Col style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
            {logged_in?<h3><a href={sign_out_route} className={"atma"} style={{color:"white",fontSize:"50px"}}>LogOut</a></h3>:<h3><a href={sign_in_route} className={"atma"} style={{color:"white",fontSize:"50px"}}>LogIn</a></h3>}
          </Col>
        </Row>
      </span>
        {logged_in?<Home />:<Login />}
      </React.Fragment>
    );
  }
}

export default App
