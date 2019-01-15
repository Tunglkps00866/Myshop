import React from 'react';
import Page from '../Page';
import {Breadcrumb} from 'react-bootstrap';
class KeyboardPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="01">
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Keyboard</Breadcrumb.Item>
            </Breadcrumb>;
            
            </div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default KeyboardPage;