import React from 'react'
import { Col, Row, Button, Input, Label,Form , Container} from 'reactstrap'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false,
            profile : {
                name:"",
                image:"",
                bio:""
            }
        }
    }
    
    profileSubmit(event){
    let thats = this
    let value = false
    let { name, image, bio} = this.state.profile
    fetch('http://3.22.130.89:8080/profiles', {
      // converting an object to a string
    	body: JSON.stringify({
    	    profile:{
    	        name: name,
    	        image:image,
    	        bio:bio,
    	        user_id:this.props.current_user.id
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
      }
    })
    event.preventDefault()
  }
  
    userProfileName(name){
    let updatedProfile = this.state.profile;
    updatedProfile.name = name
    this.setState({profile:updatedProfile})
  }
  userProfileImage(image){
    let updatedProfile = this.state.profile;
    updatedProfile.image = image
    this.setState({profile:updatedProfile})
  }
  userProfileBio(bio){
    let updatedProfile = this.state.profile;
    updatedProfile.bio = bio
    this.setState({profile:updatedProfile})
  }
  
    
    render () {
        let {logged_in} = this.props
        return (
            <React.Fragment>
                {logged_in &&
                <div className="outer-profile-container">
                <Row>
                    <Col sm={3}>
                    
                    </Col>
                    <Col sm={6}>
                        <Container className="profile-container">
                            <Form>
                                <Row className="profile-row">
                                    <h2 style={{margin:"0 auto"}}>Set your profile up</h2>
                                </Row>
                                <Row className="profile-row">
                                    <Col>
                                        <Label for="name">Name:</Label>
                                    </Col>
                                    <Col>
                                        <Input 
                                        type="text" 
                                        id="name" 
                                        className="profile-input" 
                                        placeholder="Name" 
                                        onChange={e=> {
                                        let name = e.target.value 
                                        this.userProfileName(name)}} 
                                        required/>
                                    </Col>
                                </Row>
                                <Row className="profile-row">
                                    <Col>
                                        <Label for="bio">Bio:</Label>
                                    </Col>
                                    <Col>
                                        <Input 
                                        type="text" 
                                        id="bio" 
                                        className="profile-input" 
                                        placeholder="Introduce yourself" 
                                        onChange={e=> {
                                        let bio = e.target.value 
                                        this.userProfileBio(bio)}} 
                                        required/>
                                    </Col>
                                </Row>
                                <Row className="profile-row">
                                    <Col>
                                        <Label for="image">Image:</Label>
                                    </Col>
                                    <Col>
                                        <Input 
                                        type="text" 
                                        id="image" 
                                        className="profile-input" 
                                        placeholder="Reference an image of yourself" 
                                        onChange={e=> {
                                        let image = e.target.value 
                                        this.userProfileImage(image)}} 
                                        required/>
                                    </Col>
                                </Row>
                            </Form>
                            <Row className="profile-row">
                                <Button onClick={(e) => this.profileSubmit(e)} className="profile-button">Submit</Button>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={3}>
                    </Col>
                    </Row>
                    {this.state.success && 
                    <Redirect to="/"/>
                    }
                </div>
                }
                {!logged_in &&
                    <Redirect to="/login"/>
                }
            </React.Fragment>
        )
    }
}

export default Profile