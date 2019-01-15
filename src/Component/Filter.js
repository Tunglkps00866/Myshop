import React from 'react';
import {DropdownButton,MenuItem,Row} from 'react-bootstrap';
import '../Component/Filter.css'
class Filter extends React.Component{
    render (){
        return (
            <Row>
            <br/>
            <DropdownButton title="Dropdown" id="bg-nested-dropdown" className="Filter">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <hr/>
            </Row>
        );
    }
}
export default Filter;