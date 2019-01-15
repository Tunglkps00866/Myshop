import React from 'react';
import Page from '../Page';
import {Breadcrumb,Col} from 'react-bootstrap';
class SpecialPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="03">
                <Col lg={2}></Col>
                <Col lg={8}>
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Special</Breadcrumb.Item>
                </Breadcrumb>
                </Col>
                <Col lg={2}></Col>
            </div>
        )
        return(
            <Page content={_content}></Page>
        );
    } 
}
export default SpecialPage;