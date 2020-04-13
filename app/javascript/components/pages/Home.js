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
import {Link, BrowserRouter as Router} from 'react-router-dom'

class Home extends React.Component {
  
  handlePost = (post) => {
    this.props.viewPost(post)
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
              <Col key={i}
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <Card style={{ width: "60vh", boxShadow:"0px 0px 10px", marginTop:"3vh" }}>
                  <CardImg src={prof.image}/>
                  <CardBody>
                    <CardTitle style={{textAlign:"center"}}>
                    <h3>{prof.name} is dining at {post.location}</h3>
                    </CardTitle>
                    <CardText>
                    </CardText>
                    <CardText>
                    </CardText>
                  </CardBody>
                  <Link to="/view"><Button onClick={()=>this.handlePost(post)} style={{width:"100%"}}>View Details</Button></Link>
                </Card>
              </Col>
      );
    });
    return (
      <div style={{backgroundColor:"#0081a8", display:"flex",  width: "100vw", border: "5px solid black"}}>
        {map}
      </div>
    );
  }
}

export default Home
