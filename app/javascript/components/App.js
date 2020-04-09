import React from "react"
import PropTypes from "prop-types"
import {Row, Col} from 'reactstrap'
import {FaBars} from 'react-icons/fa'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: [],
      allProfiles: []
      // We start with an empty array, so the component can finish rendering before we make our fetch request
    };
    this.getPosts();
    this.getProfiles();
  }
  
  componentWillMount() {
    this.getPosts();
    this.getProfiles();
  }
  
  getPosts = () => {
    // Making a fetch request to the url of our Rails app
    // fetch returns a promise
    fetch("http://3.133.122.149:8080/posts")
      .then(response => {
        //Make sure we get a successful response back
        if (response.status === 200) {
          // We need to convert the response to JSON
          // This also returns a promise
          return response.json();
        }
      })
      .then(postArray => {
        //Finally, we can assign the appartments to state, and they will render
        this.setState({ allPosts: postArray });
      });
  };
  
  getProfiles = () => {
    // Making a fetch request to the url of our Rails app
    // fetch returns a promise
    fetch("http://3.133.122.149:8080/profiles")
      .then(response => {
        //Make sure we get a successful response back
        if (response.status === 200) {
          // We need to convert the response to JSON
          // This also returns a promise
          return response.json();
        }
      })
      .then(profileArray => {
        this.setState({ allProfiles: profileArray });
      });
  };
  
  createPosts = (newPost) => {
    return fetch("http://3.133.122.149:8080/posts", {

      // converting an object to a string
    	body: JSON.stringify(newPost),
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
        return this.getPosts()
      }
    })
  }
  createUser = (newUser) => {
    return fetch("http://3.133.122.149:8080/users", {
      // converting an object to a string
    	body: JSON.stringify(newUser),
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
        return this.getPosts()
      }
    })
  }
  
  render () {
    
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user
    } = this.props
    
    return (
      <React.Fragment>
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
        <Router>
          {logged_in?<Redirect to="/" />:<Redirect to="/login" />}
          <Switch>
            <Route exact path="/login" render={props => <Login handleSubmit={this.createUser}/>} />
            <Route
              exact
              path="/"
              render={props => <Home posts={this.state.allPosts} profiles={this.state.allProfiles} />}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App
