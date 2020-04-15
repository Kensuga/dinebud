import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'


export default function PostMap(props){
    
    function Map(){
        return(
            <GoogleMap 
            defaultZoom={20} 
            defaultCenter={{lat: props.post.lat, lng: props.post.lng}} 
            >
            </GoogleMap>
        )
    }
    
    const WrappedMap = withScriptjs(withGoogleMap(Map))
    
    return(
        <div style={{ height: "100%"}}>
            <WrappedMap 
            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyAXP9JLMiGPMcgKJCoZtIz3LtuOFBFc53U&v=3.exp&libraries=geometry,drawing,places"}
            loadingElement={<div style={{height:"100%"}}/>}
            containerElement={<div style={{height:"100%"}}/>}
            mapElement={<div style={{height:"100%"}}/>}
            />
        </div>
    )
}