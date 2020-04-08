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

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            currentUser: []
        }
    }
    
    getUser = (post) => {
        // Making a fetch request to the url of our Rails app
        // fetch returns a promise
        fetch(`http://52.15.70.216:8080/user/${post.user_id}`)
          .then(response => {
            //Make sure we get a successful response back
            if (response.status === 200) {
              // We need to convert the response to JSON
              // This also returns a promise
              return response.json();
            }
          })
          .then(user => {
            this.setState({ currentUser: user });
          });
      };
      
  render () {
    let map = this.props.posts.map((post, i) => {
    this.getUser(post)
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
                  <CardImg src={""}/>
                  <CardBody>
                    <CardTitle>
                    {currentUser.email}
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
    });
    return (
      <div style={{backgroundColor:"#0081a8"}}>
        {map}
      </div>
    );
  }
}

export default Home
