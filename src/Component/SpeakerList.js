import React from 'react';
import Products from './Products';
import Data from '../Data';
import { Col,Grid,Row } from 'react-bootstrap';
class SpeakerList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:[]
        }
    }
    buildContent(){
        let data= Data.data;
        let pages = 3;
        let cols = [];
        let rows = [];
        for (var i in data){ 
            if(((parseInt(i)+1) % pages) == 0) {
                cols.push(
                    <Col key={(i+1)} sx={6} md={4}>
                        <Products data={data[i]}></Products>
                    </Col>
                );
                rows.push((<Row key={"row"+i}>{cols}</Row>))
                 
                cols = [];
            } else {
                cols.push(
                    <Col key={(i+1)} sx={6} md={4}>
                        <Products data={data[i]}></Products>
                    </Col>
                );
            }
        }
        if(cols.length) {console.log(cols)
            rows.push((<Row key={"lastrow"}>{cols}</Row>))
        }
        
        let _productContent = []
        console.log(_productContent)
        return (<Grid key="content">{rows}</Grid>)
    }
    render(){
        return(
            <div>
            {this.buildContent()}
            </div>
        );
    }
}
export default SpeakerList;