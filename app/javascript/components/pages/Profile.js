import React from 'react'
import { Col, Row, Button, Input, Label,Form , Container} from 'reactstrap'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render () {
        return (
            <React.Fragment>
                <h1>This is the profile component</h1>
            </React.Fragment>
        )
    }
}

export default Profile