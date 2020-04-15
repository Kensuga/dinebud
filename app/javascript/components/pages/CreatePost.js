import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Form, Button, Input, Label, FormGroup, FormText } from "reactstrap";
import { Link, Redirect } from 'react-router-dom'
import Location from '../components/Location'

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      newPost: {
        location: "",
        schedule_time: "",
        active: true,
        partner_id: 0,
        lat: 0,
        lng: 0
      },
      date: "",
      time: ""
    };
  }
  handleSubmit = () => {
    // keeps React from refreshing the page unnecessarily
    console.log("Hello")
    console.log(this.state.newPost)
    // a function call being passed from App.js
    this.props.handleSubmit(this.state.newPost)
    this.props.resetCreate()
    this.setState({
      success: true
    })
  }

  postLocationUpdate = (address, coordinates) => {
    let updatedPost = this.state.newPost;
    updatedPost.location = address;
    updatedPost.lat = coordinates.lat;
    updatedPost.lng = coordinates.lng
    this.setState({ newPost: updatedPost });
  }
  postDateUpdate(date) {
    this.setState({date: date}) 
    this.postScheduleUpdate()
  }
  
  postTimeUpdate(time) {
    this.setState({time: time})
    this.postScheduleUpdate()
  }
  
  postScheduleUpdate(){
      let realDate = this.state.date.concat(this.state.time)
      console.log(this.state.date.concat(this.state.time))
      console.log(realDate)
      this.setState({ schedule_time: realDate})
  }

  render() {
    return (
      <div style={{backgroundColor:"#0081a8", height:"100vh"}}>
      <Container>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Create A New Post
        </h1>
        <Container style={{backgroundColor:"white", borderRadius:"5px"}}>
            <Row style={{ display: "flex", justifyContent: "center", width:"50%" }}>
              <Location handleLocation = { this.postLocationUpdate} />
            </Row>
            <Row style={{display:"flex", justifyContent:"center", justifyContent:"space-around"}}>
                <Form inline>
                    <FormGroup>
                        <Label for="exampleDate">Date</Label>
                        <Input
                          type="date"
                          name="date"
                          id="dateate"
                          placeholder="date placeholder"
                          onChange={e => {
                              let date = e.target.value;
                              console.log(date);
                              this.postDateUpdate(date);
                          }} />
                        <Label for="exampleTime">Time</Label>
                        <Input
                          type="time"
                          name="time"
                          id="time"
                          placeholder="time placeholder"
                          onChange={e => {
                              let time = e.target.value;
                              console.log(time);
                              this.postTimeUpdate(time)
                          }} />
                    </FormGroup>
                </Form>
            </Row>
          <Row style={{ display: "flex", justifyContent: "center" }}>
              <Button
                name="submit"
                id="submit"
                onClick={() => this.handleSubmit()}
              >
                Submit
              </Button>
              { this.state.success && <Redirect to="/"/> }
          </Row>
        </Container>
        </Container>
      </div>
    );
  }
}

export default CreatePost;
