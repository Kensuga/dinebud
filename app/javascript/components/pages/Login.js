import React from "react"
import { Col, Row, Button, Input, Label,Form , Container} from 'reactstrap'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      success: false,
      signIn:true,
      message:false,
      loginMessage: "Make sure your passwords match",
      loginUser:{
        email:"",
        password:""
      },
      newUser:{
        email:"",
        password:"",
        password_confirmation:""
      }
    }
  }
  
  createSubmit(event){
    let thats = this
    let {email, password, password_confirmation } = this.state.newUser
    if(password === password_confirmation){
    fetch('http://3.22.130.89:8080/users', {
      // converting an object to a string
    	body: JSON.stringify({
    	  user:{
    	    email: email,
    	    password: password,
    	    password_confirmation: password_confirmation
    	  }}),
      // specify the info being sent in JSON and the info returning should be JSON
    	headers: {
    		"Content-Type": "application/json"
    	},
      // HTTP verb so the correct endpoint is invoked on the server
    	method: "POST"
    })
    .then((response) => {
      // if the response is good call the getAppts method
      if(response.ok){
        thats.setState({success:true})
        location.reload()
      }
    })
    } else {
      thats.setState({message:true})
    }
    event.preventDefault()
  }
  
  loginSubmit(event){
    let thats = this
    let {email, password } = this.state.loginUser
    fetch('http://3.22.130.89:8080/users/sign_in', {
      // converting an object to a string
    	body: JSON.stringify({
    	  user:{
    	    email: email,
    	    password: password,
    	  }}),
      // specify the info being sent in JSON and the info returning should be JSON
    	headers: {
    		"Content-Type": "application/json"
    	},
      // HTTP verb so the correct endpoint is invoked on the server
    	method: "POST"
    })
    .then((response) => {
      // if the response is good call the getAppts method
      if(response.ok){
        thats.setState({success:true})
        alert("success")
        location.reload()
      }
    })
    event.preventDefault()
  }

  userCreateEmail(email){
    let updatedUser = this.state.newUser;
    updatedUser.email = email
    this.setState({newUser:updatedUser})
  }
  userCreatePass(password){
    let updatedUser = this.state.newUser;
    updatedUser.password = password
    this.setState({newUser:updatedUser})
  }
  userConfirmPass(password){
    let updatedUser = this.state.newUser
    updatedUser.password_confirmation = password
    this.setState({newUser:updatedUser})
  }
  userLoginEmail(email){
    let loginUser = this.state.loginUser
    loginUser.email = email
    this.setState({loginUser:loginUser})
  }
   userLoginPassword(password){
    let loginUser = this.state.loginUser
    loginUser.password = password
    this.setState({loginUser:loginUser})
  }
  
  
  
  render () {
    let {sign_in, message, loginMessage} = this.state
    return (
      <React.Fragment>
      <div className="login-container">
        <Container style={{display:"flex",alignItems:"center"}}>
          <Col style={{display:"flex",justifyContent:"center",alignItems:"column",alignItems:"center",textAlign:"center",color:"white"}}>
            <div className="left-login-container">
              <h1>DineBud</h1>
              <h3>Don't Dine Alone. Dine Bud.</h3>
              <p>Our objective at <span>Dine Bud</span> is to connect people who want to help others in the form of a meal, with those who need it.</p>
            </div>
          </Col>
          {sign_in &&
          <Col>
            <Container className="log-form-container" >
                <Row>
                  <h3>Have you signed up with us?</h3>
                </Row>
                <Row>
                  <h2>Login</h2>
                </Row>
               <Form>
                  <Row display={{display:"flex",justifyContent:"center"}}>
                    <Col>
                      <Label for="email">Email: </Label>
                    </Col>
                    <Col>
                      <Input 
                      type="text" 
                      id="email" 
                      className="input-email" 
                      placeholder = "Email" 
                      onChange={e=> {
                          let email = e.target.value
                          this.userLoginEmail(email)
                        }} 
                        required/>
                    </Col>
                  </Row>
                  <Row display={{display:"flex",justifyContent:"center"}} className="row-log">
                    <Col>
                      <Label for="password">Password: </Label>
                    </Col>
                    <Col>
                      <Input 
                      type="password" 
                      id="password" 
                      className= "input-pass" 
                      placeholder = "Password" 
                      onChange={e=> {
                        let password = e.target.value
                        this.userLoginPassword(password)
                      }} 
                      required/>
                   </Col>
                  </Row>
                </Form>
                <Row>
                  <p>Don't have an account? <span className="sign-a" onClick={()=>this.setState({sign_in:false})}>Sign Up</span></p>
                </Row>
                <Row>
                  <Button onClick={(e) => this.loginSubmit(e)} className="login-button">Submit</Button>
                  { this.state.success && 
                  <Redirect to="/"/>
                  }
                </Row>
              </Container>
            </Col>
        } 
        {!sign_in &&
          <Col>
            <Container className="log-form-container" >
                <Row>
                  <h2>Sign Up</h2>
                </Row>
               <Form>
                  <Row display={{display:"flex",justifyContent:"center"}}>
                    <Col>
                      <Label for="email">Email: </Label>
                    </Col>
                    <Col>
                    <Input  type="text" id="email" className="input-email" placeholder="Email" onChange={e=> {
                        let email = e.target.value
                        this.userCreateEmail(email)
                      }} 
                      required/>
                    </Col>
                  </Row>
                  <Row display={{display:"flex",justifyContent:"center"}} className="row-log">
                    <Col>
                      <Label for="password">Password: </Label>
                    </Col>
                    <Col>
                      <Input 
                      type="password" id="password" className= "input-pass" placeholder="Password(6 characters min)" onChange={e=> {
                        let password = e.target.value
                        this.userCreatePass(password)
                      }} required/>
                   </Col>
                  </Row>
                  <Row display={{display:"flex",justifyContent:"center"}} className="row-log">
                    <Col>
                      <Label for="confirm-password">Confirm Password: </Label>
                    </Col>
                    <Col>
                      <Input 
                      type="password" id="password_confirmation" className= "input-pass" placeholder="Confirm Password" onChange={e=> {
                        let password = e.target.value
                        this.userConfirmPass(password)
                      }} required/>
                   </Col>
                  </Row>
                </Form>
                <Row>
                  <p>Already have an account? <span className="sign-a" onClick={()=>this.setState({sign_in:true})}>Sign In</span></p>
                </Row>
                {message && 
                <Row>
                  <p style={{fontWeight:"bold",fontStyle:"italic"}}>{loginMessage}</p>
                </Row>
                }
                <Row>
                  <Button onClick={(e) => this.createSubmit(e)} className="login-button">Submit</Button>
                  { this.state.success && 
                  <Router><Redirect to="/"/></Router>
                  }
                </Row>
              </Container>
            </Col>
        }
        </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Login
