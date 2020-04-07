import React from "react"
import { Col, Row, Button, Input, Label,Form } from 'reactstrap'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      success: false,
      newUser:{
        email:"",
        password:""
      }
    }
  }
  
  userEmailUpdate(email){
    let updatedUser = this.state.newUser;
    updatedUser.email = email
    this.setState({updatedUser})
  }
  userPasswordUpdate(password){
    let updatedUser = this.state.newUser;
    updatedUser.email = password
    this.setState({updatedUser})
  }
  
  
  
  
  render () {
    return (
      <React.Fragment>
      <Row>
        <Col>
          <h1>I am on the left</h1>
        </Col>
        
        <Col>
          <div className="form-login-cs">
            <h3>Have you signed up with us?</h3>
            <h2>Login</h2>
            <Form>
              <Label for="email">Email:</Label>
              <Input 
              type="text" id="email" onChange={e=> {
                let email = e.target.value
                this.userEmailUpdate(email)
              }}/>
              <Label for="password">Password:</Label>
              <Input 
              type="text" id="password" onChange={e=> {
                let password = e.target.value
                this.userEmailUpdate(password)
              }}/>
            </Form>
            <Button onClick={this.handleSubmit} className="login-button">Submit</Button>
          </div>
        </Col>
      </Row>
        
      </React.Fragment>
    );
  }
}

export default Login
