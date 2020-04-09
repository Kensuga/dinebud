import React from "react"
import { Col, Row, Button, Input, Label,Form , Container} from 'reactstrap'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      success: false,
      sign_in:true,
      newUser:{
        email:"",
        encrypted_password:""
      }
    }
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.props.handleSubmit(this.state.newUser)
    this.setState({
      success:true
    })
  }
  
  userEmailUpdate(email){
    let updatedUser = this.state.newUser;
    updatedUser.email = email
    this.setState({updatedUser})
  }
  userPasswordUpdate(password){
    let updatedUser = this.state.newUser;
    updatedUser.encrypted_password = password
    this.setState({updatedUser})
  }
  
  
  render () {
    let {sign_in} = this.state
    return (
      <React.Fragment>
      <div className="login-container">
      {sign_in && 
        <Row style={{display:"flex",alignItems:"center"}}>
          <Col style={{display:"flex",justifyContent:"center",alignItems:"column",alignItems:"center",textAlign:"center",color:"white"}}>
            <div className="left-login-container">
              <h1>DineBud</h1>
              <h3>Don't Dine Alone. Dine Bud.</h3>
              <p>Our objective at <span>Dine Bud</span> is to connect people who want to help others in the form of a meal, with those who need it.</p>
            </div>
          </Col>
          
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
                    <Input  type="text" id="email" className="input-email" onChange={e=> {
                        let email = e.target.value
                        this.userEmailUpdate(email)
                      }}/>
                    </Col>
                  </Row>
                  <Row display={{display:"flex",justifyContent:"center"}} className="row-log">
                    <Col>
                      <Label for="password">Password: </Label>
                    </Col>
                    <Col>
                      <Input 
                      type="text" id="password" className= "input-pass" onChange={e=> {
                        let password = e.target.value
                        this.userEmailUpdate(password)
                      }}/>
                   </Col>
                  </Row>
                </Form>
                <Row>
                  <p>Don't have an account? <a onClick={()=>this.setState({sign_in:false})}>Sign Up</a></p>
                </Row>
                <Row>
                  <Button onClick={this.handleSubmit} className="login-button">Submit</Button>
                  { this.state.success && 
                  <Redirect to="/"/> 
                  }
                </Row>
              </Container>
            </Col>
          </Row>
        } 
        {!sign_in &&
        <Row style={{display:"flex",alignItems:"center"}}>
          <Col style={{display:"flex",justifyContent:"center",alignItems:"column",alignItems:"center",textAlign:"center",color:"white"}}>
            <div className="left-login-container">
              <h1>DineBud</h1>
              <h3>Don't Dine Alone. Dine Bud.</h3>
              <p>Our objective at <span>Dine Bud</span> is to connect people who want to help others in the form of a meal, with those who need it.</p>
            </div>
          </Col>
          
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
                    <Input  type="text" id="email" className="input-email" onChange={e=> {
                        let email = e.target.value
                        this.userEmailUpdate(email)
                      }}/>
                    </Col>
                  </Row>
                  <Row display={{display:"flex",justifyContent:"center"}} className="row-log">
                    <Col>
                      <Label for="password">Password: </Label>
                    </Col>
                    <Col>
                      <Input 
                      type="text" id="password" className= "input-pass" onChange={e=> {
                        let password = e.target.value
                        this.userEmailUpdate(password)
                      }}/>
                   </Col>
                  </Row>
                  <Row display={{display:"flex",justifyContent:"center"}} className="row-log">
                    <Col>
                      <Label for="confirm-password">Confirm Password: </Label>
                    </Col>
                    <Col>
                      <Input 
                      type="text" id="password" className= "input-pass" placeholder="Confirm Password" onChange={e=> {
                        let password = e.target.value
                        this.userEmailUpdate(password)
                      }}/>
                   </Col>
                  </Row>
                </Form>
                <Row>
                  <p>Already have an account? <a onClick={()=>this.setState({sign_in:true})}>Sign In</a></p>
                </Row>
                <Row>
                  <Button onClick={this.handleSubmit} className="login-button">Submit</Button>
                  { this.state.success && 
                  <Redirect to="/"/> 
                  }
                </Row>
              </Container>
            </Col>
          </Row>
        }
        </div>
      </React.Fragment>
    );
  }
}

export default Login
