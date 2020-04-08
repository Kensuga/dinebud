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

class ViewPost extends React.Component {
  render () {
      let profile = ""
      for(let i=0;i<this.props.profiles.length;i++){
        if(this.props.profiles[i].user_id === this.props.post.user_id){
          profile = this.props.profiles[i]
        }
      }
      return (
          <div>
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
                    {profile.name} , {this.props.post.location}
                    </CardTitle>
                    <CardText>
                    </CardText>
                    <CardText>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <br />
          </div>
      );
  }
}

export default ViewPost
