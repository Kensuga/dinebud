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

class ViewPost extends React.Component {
  constructor(props){
    super(props)
    this.state={
      success:false,
      edit: false,
      editPost: this.props.post
    }
  }
  
  handleDelete = () => {
    this.props.deletePost()
    this.setState({success: true})
  }
  
      
  handleEdit = () => {
    this.setState({edit : true})
  }
  
  handleSave = () => {
    this.setState({edit: false})
    this.handleUpdate(this.state.editPost)
  }
  
  postLocationUpdate = (location) => {
    let updateEdit = this.state.editPost
    updateEdit.location = location
    this.setState({editPost : updateEdit})
  }


  handleUpdate = (post) => {
<<<<<<< HEAD
    fetch(`http://3.15.186.122:8080/posts/${post.id}`,
=======
    fetch(`http://18.217.43.101:8080/posts/${post.id}`,
>>>>>>> 9d104181d9772cfacb7cf672fa00a5cceb0ebabe
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
                  <CardImg src={prof.image}/>
                  <CardBody>
                    <CardTitle>
                    <Row>
                    <Col sm={2}>Post Owner: </Col><Col>{prof.name}</Col>
                    </Row>
                    <br/>
                    <Row style={{display:'flex'}}>
                    <Col sm={2}>Location: </Col>{this.state.edit && <Col><Input
                    type="text"
                    id="location"
                    placeholder="Location"
                    onChange={e => {
                      let location = e.target.value;
                      this.postLocationUpdate(location);}} /></Col>}
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
