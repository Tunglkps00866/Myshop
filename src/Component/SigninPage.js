import React from 'react';
import Page from '../Page';
import {FormControl,Row,Col,FormGroup,Image,Button,Checkbox,Breadcrumb,Grid} from 'react-bootstrap';
import '../Component/SigninPage.css';
class SigninPage extends React.Component{
    buildContent(){
        let _content=[];
        _content.push(
            <Row key="01">
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Sign In</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
        );
        _content.push(
            <Row key="02" className="Signin_Form">
            <Col lg={4}></Col>
            <Col lg={4}>
            <Image src="../Image/avata.jpg" className="Avata" rounded/>
            </Col>
            <Col lg={4}></Col>
            </Row>
        );
        _content.push(
            <Row key="03" className="Signin_Form">
            <Col></Col>
            <Col lg={12}>
            <h1><b>SIGN IN</b></h1>
            </Col>
            <Col></Col>
            </Row>
        );
        _content.push(
            <Row key="04" className="Signin_Form">
                <Col lg={2}></Col>
                    <Col lg={8}>
                        <form className="Form">
                            <FormGroup >
                            <FormControl type="text" placeholder="Username..."/>
                            </FormGroup>
                        </form>
                        <form className="Form">
                            <FormGroup >
                            <FormControl type="password" placeholder="Password..."/>
                            </FormGroup>
                        </form>
                    </Col>
                <Col lg={2}></Col>            
            </Row>
        );
        _content.push(
            <Row key="05">
            <Col lg={3}></Col>
                <Col lg={6} className="checkbox_remember">
                    <Checkbox inline>Remember me</Checkbox>
                </Col>
            <Col lg={3}></Col>
            </Row>
        );
        _content.push(
            <Row key="07" className="Signin_Form">
            <Col lg={4}></Col>
            <Col lg={4}>
                    <Button bsSize="large" bsStyle="info" block className="button">Sign in</Button>
            </Col>
            <Col lg={4}></Col>
            </Row>
        );
        _content.push(
            <Row key="06" className="Signin_Form">
                <Col lg={3}></Col>
                <Col lg={3}>
                    <a href="#">Forgot Password?</a>
                </Col>
                <Col lg={3}>
                    <a href="/dang-ky">Create Account</a><br/>
                </Col>
                <Col lg={3}></Col>
            </Row>
        );
        
        return(<Grid>{_content}</Grid>);
    }
    render(){
        return(
            <Page content={this.buildContent()}></Page>
        );
    }
}
export default SigninPage;