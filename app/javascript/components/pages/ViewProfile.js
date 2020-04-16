import React from 'react'
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

export default class ViewProfile extends React.Component{
  
    render(){
        let {profile} = this.props
        let dines = 0
        let rep = " has no reputation history"
        if(profile.number_of_dines !== null){
            dines = profile.number_of_dines
        }
        if(profile.reputation !== null){
            rep = profile.reputation
        }
        return(
            <React.Fragment>
                <Container style={{margin:"0 auto", width:"50vw",height:"50vh"}} >
                    <Card style={{ boxShadow:"0px 0px 10px", marginTop:"3vh" }}>
                        <Row>
                            <Col>
                                <CardImg src={profile.image}/>
                            </Col>
                            <Col>
                                <CardBody>
                                    <CardTitle>
                                        <h3>{profile.name}</h3>
                                    </CardTitle>
                                    <CardBody>
                                        <h4>Bio</h4>
                                        <p>{profile.bio}</p>
                                        <h4>Number of Dines</h4>
                                        <p>{dines}</p>
                                        <h4>Reputation</h4>
                                        <p>{profile.name}{rep}</p>
                                    </CardBody>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </React.Fragment>
            )
    }
}