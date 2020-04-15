import React from "react"
import PropTypes from "prop-types"
import {Row, Col} from 'reactstrap'
import {FaBars, FaBell, FaBellSlash, FaPlus} from 'react-icons/fa'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import ViewPost from './pages/ViewPost'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Location from './components/Location'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: [],
      allProfiles: [],
      viewPost: "",
      hasProfile:true,
      create: false
      // We start with an empty array, so the component can finish rendering before we make our fetch request
    };
    this.getPosts();
    this.getProfiles();
    this.checkProfile();
  }
  
  componentWillMount() {
    this.getPosts();
    this.getProfiles();
    this.checkProfile();
  }
  
  getPosts = () => {
    // Making a fetch request to the url of our Rails app
    // fetch returns a promise
    fetch("http://13.59.38.196:8080/posts")
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
    fetch("http://13.59.38.196:8080/profiles")
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
        this.checkProfile()
      });
  };
  
  viewPost = (post) => {
    this.setState({viewPost: post})
  }
  
  createPosts = (newPost) => {
    return fetch("http://13.59.38.196:8080/posts", {
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
  
  loginUser = (loginUser) => {
    return fetch("http://13.59.38.196:8080/users", {
      // converting an object to a string
    	body: JSON.stringify(loginUser),
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
 
  deletePost = () => {
   fetch(`http://13.59.38.196:8080/posts/${this.state.viewPost.id}`, {
     method: 'DELETE'
    }
  ).then((response) => {
    if(response.ok){
      alert("Post was deleted!")
      return this.getPosts()
    }
  })
  }
  checkProfile=()=>{
    // e.preventDefault()
    let result = false
    let {allProfiles} = this.state 
    let {current_user} = this.props
    console.log(this.state.allProfiles)
    for(let i=0; i<allProfiles.length;i++){
      console.log(allProfiles[i])
      console.log(current_user.id)
      if(allProfiles[i].user_id === current_user.id){
        result = true
      }
    }
    this.setState({hasProfile:result})
  }
  
  
  render () {

    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      sign_up_route,
      current_user
    } = this.props
    const {
      create,
      hasProfile
    } = this.state
    return (
      <div style={{backgroundColor:"#0081a8"}}>
      <span>
        <Row style={{background:"#ffa600", borderBottom: "10px solid #bc7a00"}}>
          <Col sm={1} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <FaBars style={{color:"white", fontSize:"50px", display:"flex",justifyContent:"center"}} />
          </Col>
          <Col sm={8} style={{display:"flex", alignItems:"center", alignItems:"center"}}>
            <h1 className={"pacifico"} style={{color:"white", fontSize:"75px"}} onClick={()=> {window.location.href = "http://13.59.38.196:8080/"}}>
                  DineBud
            </h1>
          </Col>
          <Col style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            {logged_in &&
              <FaPlus style={{color:"white", fontSize:"50px"}} onClick={()=>{this.setState({create: true})}}/>
            }
          </Col>
          <Col style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
            {logged_in &&
              <h3><a href={sign_out_route} className={"atma"} style={{color:"white",fontSize:"50px"}}>LogOut</a></h3>
            }
            {!logged_in &&
              <h3><a href={sign_up_route} className={"atma"} style={{color:"white",fontSize:"50px"}}>Sign Up</a></h3>
            }
          </Col>
        </Row>
      </span>
        <Router>
          {logged_in && hasProfile && <Redirect to="/" />}
          {logged_in && !hasProfile && <Redirect to="/createprofile"/>}
          {!logged_in && <Redirect to="/login"/>}
          { create && <Redirect to="/new" />}
          <Switch>
            <Route exact path="/new" render={props => <CreatePost handleSubmit={this.createPosts} sign_up_route = {sign_up_route}/>} />
            <Route exact path="/login" render={props => <Login handleLoginSubmit={this.loginUser} />} />
            <Route exact path="/view" render={props => <ViewPost profiles={this.state.allProfiles} post={this.state.viewPost} current_user={current_user} deletePost={this.deletePost} />} />
            <Route exact path="/" render={ props => <Home posts={this.state.allPosts} profiles={this.state.allProfiles} checkProfile = {this.checkProfile} viewPost={this.viewPost} current_user={current_user} />} />
            <Route exact path="/createprofile" render={props => <Profile current_user={current_user} logged_in={logged_in} checkProfile={this.checkProfile}/>}/>
          </Switch>
        </Router>
        <footer style={{ backgroundColor:"#0081a8", marginTop:"3vh"}}>
          <p style={{textAlign:"center", color:"rgba(255,255,255,0.4)"}}>Created by Cruz, Art, and Alejandro</p>
        </footer>
      </div>
    );
  }
}

export default App
