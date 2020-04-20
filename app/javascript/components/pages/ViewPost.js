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
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa'
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
  }
      
  handleEdit = () => {
    this.setState({edit : true})
  }
  
  handleSave = () => {
    this.setState({edit: false})
    this.postLocationUpdate(this.state.address)
    this.postCoordsUpdate(this.state.lat,this.state.lng)
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
  
  handleJoin = () =>{
    let updateEdit = this.state.editPost
    updateEdit.partner_id = this.props.current_user.id
    this.setState({editPost : updateEdit}, this.handleUpdate(this.state.editPost))
  }
  
  handleLeave = () =>{
    let updateEdit = this.state.editPost
    updateEdit.partner_id = 0
    this.setState({editPost: updateEdit}, this.handleUpdate(this.state.editPost))
  }


  handleUpdate = (post) => {
    fetch(`/posts/${post.id}`,
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
      let joined = false
      let full = false;
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
      
      if(this.props.current_user.id === post.partner_id){
        joined = true;
      }
      
      if(this.state.editPost.partner_id !== 0){
        full = true;
      }
      
      console.log(this.state.editPost)
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
                    <Col><PostMap post={this.state.editPost}/></Col>
                  </Row>
                  </Container>
                  <CardBody>
                    <CardTitle>
                    <Row>
                    <Col sm={2}>Post Owner: </Col><Col>{prof.name}</Col>
                    </Row>
                    <br/>
                    <Row style={{display:'flex'}}>
                    <Col sm={2}>Location: </Col>{owner && <Col><Location handleLocation = {this.getLocation} handleSave = {this.handleSave} post ={this.state.editPost} inCreate={false}/></Col>}
                    {!owner && <Col><p>{this.state.editPost.location}</p></Col>}
                    </Row>
                    </CardTitle>
                    <CardText style={{textAlign:"end"}}>
                      {owner?<FaTrashAlt className="pointer" style={{fontSize:"50px", color:"rgb(0,0,0,0.3"}} onClick={()=> this.handleDelete()}/>:<p> </p>}
                      {!owner?full?joined?<Button onClick={()=> this.handleLeave()}>Leave Post</Button>:<p/>:<Button onClick={()=> this.handleJoin()}>Join Post</Button>:<p/>}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row style={{display:'flex', justifyContent:"center", marginTop:"3vh"}}>
            
            </Row>
            {this.state.success===true && <Redirect to="/"/>}
          </div>
      );
  }
}

export default ViewPost