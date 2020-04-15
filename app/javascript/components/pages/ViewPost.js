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
  Container,
  Input
} from "reactstrap";
import { FaTrashAlt, FaEdit, FaCheckCircle } from 'react-icons/fa'
import { Redirect } from "react-router-dom"
import Location from '../components/Location'
import PostMap from '../components/PostMap'

class ViewPost extends React.Component {
  constructor(props){
    super(props)
    this.state={
      success:false,
      edit: false,
      editPost: this.props.post,
      address: "",
      lat: 0,
      lng: 0
    }
  }
  
  handleDelete = () => {
    this.props.deletePost()
    this.setState({success: true})
  }
  
  getLocation = (address, coordinates) => {
    this.setState({address: address})
    this.setState({lat : coordinates.lat})
    this.setState({lng : coordinates.lng})
    console.log(address, coordinates)
  }
      
  handleEdit = () => {
    this.setState({edit : true})
  }
  
  handleSave = () => {
    this.setState({edit: false})
    this.postLocationUpdate(this.state.address)
    this.postCoordsUpdate(this.state.lat,this.state.lng)
    console.log(this.state.editPost)
    this.handleUpdate(this.state.editPost)
  }
  
  postCoordsUpdate = (lat, lng) => {
    let updateEdit = this.state.editPost
    updateEdit.lat = lat
    updateEdit.lng = lng
    this.setState({editPost: updateEdit})
  }
  
  postLocationUpdate = (location) => {
    let updateEdit = this.state.editPost
    updateEdit.location = location
    this.setState({editPost : updateEdit})
  }


  handleUpdate = (post) => {
<<<<<<< HEAD
    fetch(`http://18.219.82.25:8080/posts/${post.id}`,
=======
    fetch(`http://13.59.38.196:8080/posts/${post.id}`,
>>>>>>> 0c6d47f7469272d742a753729c29ac2cc908dde7
    {
      method: 'PUT',
      body: JSON.stringify({post: post}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      })
  }
  
  
  render () {
      let owner = false
      let prof = ""
      const {
        post
      } = this.props
      
      this.props.profiles.forEach((profile,index) => {
        if(profile.user_id === post.user_id){
          prof = profile
        }
      })
      if(this.props.current_user.id === post.user_id){
        owner = true
      }
      return (
          <div style={{backgroundColor:"#0081a8"}}>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <Card style={{ boxShadow:"0px 0px 10px", marginTop:"3vh" }}>
                  <Container style={{display:"flex", flexDirection: "row"}}>
                  <Row style={{height:"50vh"}}>
                    <Col><CardImg src={prof.image} style={{height:"100%", objectFit:"cover"}}/></Col>
                    <Col><PostMap post={post}/></Col>
                  </Row>
                  </Container>
                  <CardBody>
                    <CardTitle>
                    <Row>
                    <Col sm={2}>Post Owner: </Col><Col>{prof.name}</Col>
                    </Row>
                    <br/>
                    <Row style={{display:'flex'}}>
                    <Col sm={2}>Location: </Col>{this.state.edit && <Col><Location handleLocation = {this.getLocation}/></Col>}
                    {!this.state.edit && <Col><p>{post.location}</p></Col>}
                    </Row>
                    </CardTitle>
                    <CardText>
                    </CardText>
                    <CardText>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row style={{display:'flex', justifyContent:"center", marginTop:"3vh"}}>
            {owner&& !this.state.edit &&
              <FaEdit  style={{fontSize:"50px", color:"white"}} onClick={()=> this.handleEdit()}/>
            }
            {owner && this.state.edit &&
              <FaCheckCircle style={{fontSize:"50px", color:"white"}} onClick={()=> this.handleSave()}/>
            }
            {owner?<FaTrashAlt style={{fontSize:"50px", color:"white"}} onClick={()=> this.handleDelete()}/>:<p> </p>}
            </Row>
            {this.state.success===true && <Redirect to="/"/>}
          </div>
      );
  }
}

export default ViewPost
