import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {Input, Row, Col, Button} from 'reactstrap'
import {FaEdit} from 'react-icons/fa'


export default function Location(props){

const [address, setAddress] = React.useState("");
const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng:null
})

const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value)
    setCoordinates(latLng);
    props.handleLocation(value,latLng)
}

const [edit, setEdit] = React.useState(props.inCreate?true:false)

return(
    <div style={{width:"100%"}}>
        <Col>
        {edit &&
        <PlacesAutocomplete 
            value={address} 
            onChange={setAddress} 
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading})=> (
            <div>
              <Input {...getInputProps({placeholder: "Type Location" })} />
              <div>
                {loading && <div>...loading</div>}
                
                {suggestions.map(suggestion => {
                    const style = {
                        backgroundColor: suggestion.active? "#41b6e6":"#fff"
                    }
                  return (
                  <div {...getSuggestionItemProps(suggestion, {style})}>
                    {suggestion.description}
                  </div>
                  );
                })}
              </div>
            </div>)}
        </PlacesAutocomplete>
        }
        {!edit &&
            props.post.location
        }
        </Col>
         {props.inCreate?<p/>:edit?<Col><Button onClick={() => {
            props.handleSave()
            setEdit(false)
            }}>
                Save Changes
            </Button></Col>:<Col><FaEdit className="pointer" onClick={()=> {setEdit(true)}}/></Col>
         }
    </div>
    );
}