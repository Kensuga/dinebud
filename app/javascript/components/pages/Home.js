import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Badge,
  Row,
  Col,
  Button,
  Container
} from "reactstrap";
import {Link, BrowserRouter as Router, Redirect,Switch,Route} from 'react-router-dom'
import Profile from './Profile'
import PostMap from '../components/PostMap'
 
class Home extends React.Component {
 
  handlePost = (post) => {
    this.props.viewPost(post)
  }
  handleProfile = (profile) => {
    this.props.getProfile(profile)
  }
 
  render () {
    let map = this.props.posts.map((post, i) => {
      let prof = ""
      this.props.profiles.forEach((profile,index) => {
        if(profile.user_id === post.user_id){
          prof = profile
        }
      })
     
      return (
        <div key={i}
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Card style={{ width: "60vh", boxShadow:"0px 0px 10px", marginTop:"3vh" }}>
            <Row style={{height:"30vh"}}>
            <Col><CardImg src={prof.image} style={{height:"100%", objectFit:"cover"}}/></Col>
            <Col><PostMap post={post}/></Col>
            </Row>
            <CardBody>
              <CardTitle style={{textAlign:"center"}}>
              <h3><Link to="/profile" onClick={() => this.handleProfile(prof.user_id)}>{prof.name}</Link> is dining at {post.location}</h3>
       
              </CardTitle>
              <CardText>
              </CardText>
              <CardText>
              </CardText>
            </CardBody>
            <Link to="/view"><Button className="colorButton" onClick={()=>this.handlePost(post)} style={{width:"100%"}}>View Details</Button></Link>
          </Card>
        </div>
      );
    });
   
    let limiter = Math.ceil(map.length/3)
   
    let content = []
    let tracker = 0
    const arrayContent = () => {
      let array = []
      for(let i = 0; i < 3; i++){
        if(tracker >= map.length){
          i = 3;
        } else {
        array.push(map[tracker])
        tracker += 1
      }
      }
      return array
    }
   
    for(let i = 0; i< limiter; i++){
      content.push(
        <Row style= {{display:"flex", justifyContent:"center", justifyContent:"space-around", margin:"0 auto", width:"vw"}}>
          {arrayContent()}
          <br/>
        </Row>
        )
    }
    return (
      <div style={{backgroundColor:"#0081a8", justifyContent:"center"}}>
          {content}
      </div>
    );
  }
}
 
export default Home
