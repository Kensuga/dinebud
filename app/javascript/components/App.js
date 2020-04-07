import React from "react"
import PropTypes from "prop-types"
import {Row, Col} from 'reactstrap'
import {FaBars} from 'react-icons/fa'
import './App.css'

class App extends React.Component {
  render () {
    
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    
    return (
      <React.Fragment>
      <Row style={{background:"#ffa600", borderBottom: "10px solid #bc7a00"}}>
        <Col sm={10} style={{display:"flex"}}>
            <FaBars style={{color:"white", fontSize:"50px", display:"flex",justifyContent:"center"}} />
          <h1 className={"pacifico"} style={{color:"white", fontSize:"75px",  marginBottom:"0 auto"}}>
            DineBud
          </h1>
        </Col>
        <Col>
          {logged_in?<h3><a href={sign_out_route} className={"atma"} style={{color:"white",fontSize:"50px"}}>LogOut</a></h3>:<h3><a href={sign_in_route} className={"atma"} style={{color:"white",fontSize:"50px"}}>LogIn</a></h3>}
        </Col>
      </Row>
        Hello World
      </React.Fragment>
    );
  }
}

export default App
