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
      let profile = ""
      for(let i=0;i<this.props.profiles.length;i++){
        if(this.props.profiles[i].user_id === post.user_id){
          profile = this.props.profiles[i]
        }
      }
      return (
          <div key={i}>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <Card style={{ width: "60vh", boxShadow:"0px 0px 10px", marginTop:"3vh" }}>
                  <CardImg src={profile.image}/>
                  <CardBody>
                    <CardTitle>
                    {profile.name} , {post.location}
                    </CardTitle>
                    <CardText>
                    </CardText>
                    <CardText>
                    </CardText>
                  </CardBody>
                  <Router><Link to="/view"><Button onClick={()=>this.handlePost(post)}>View Details</Button></Link></Router>
                </Card>
              </Col>
            </Row>
            <br />
          </div>
      );
    });
    return (
      <div style={{backgroundColor:"#0081a8"}}>
        {map}
      </div>
    );
  }
}

export default Home
