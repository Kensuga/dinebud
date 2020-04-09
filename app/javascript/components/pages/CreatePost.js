import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Form, Button, Input, Label, FormGroup, FormText } from "reactstrap";
import { Link, Redirect } from 'react-router-dom'

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      newPost: {
        location: "",
        schedule_time: "",
      },
      date: "",
      time: ""
    };
  }
  handleSubmit = (event) => {
    // keeps React from refreshing the page unnecessarily
    console.log("Hello")
    event.preventDefault()
    // a function call being passed from App.js
    this.props.handleSubmit(this.state.newPost)
    this.setState({
      success: true
    })
  }

  postLocationUpdate(location) {
    let updatedPost = this.state.newPost;
    updatedPost.location = location;
    this.setState({ newPost: updatedPost });
  }
  postDateUpdate(date) {
    this.setState({date: date})
  }
  
  postTimeUpdate(time) {
      this.setState({time: time})
  }
  
  postScheduleUpdate(){
      let realDate = this.state.date.concat(this.state.time)
      this.setState({ schedule_time: realDate})
  }

  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Create A New Post
        </h1>
        <Container>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Form>
                <FormGroup>
                  <Label for="location">Location:</Label>
                  <Input
                    type="text"
                    id="location"
                    placeholder="Location"
                    onChange={e => {
                      let location = e.target.value;
                      this.postLocationUpdate(location);
                    }} />
                </FormGroup>
                </Form>
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
                              this.postTimeUpdate(time)
                          }} />
                    </FormGroup>
                </Form>
            </Row>
          <Row style={{ display: "flex", justifyContent: "center" }}>
              <Button
                name="submit"
                id="submit"
                onClick={() => this.handleSubmit }
              >
                Submit
              </Button>
              { this.state.success && <Redirect to="/"/> }
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreatePost;
