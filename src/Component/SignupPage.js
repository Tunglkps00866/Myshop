import React from 'react';
import Page from '../Page';
import {FormControl,Row,Col,Grid,Breadcrumb,FormGroup,Image,Button} from 'react-bootstrap';
import '../Component/SignupPage.css';
class SignupPage extends React.Component{
    buildContent(){
        let _content=[];
        _content.push(
            <Row key="01">
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Sign Up</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
        );
        _content.push(
            <Row key="02" className="Signup_Form">
            <Col lg={4}></Col>
            <Col lg={4}>
            <Image src="../Image/avata.jpg" className="Avata" rounded/>
            </Col>
            <Col lg={4}></Col>
            </Row>
        );
        _content.push(
            <Row key="03" className="Signup_Form">
            <Col></Col>
            <Col lg={12}>
            <h1><b>SIGN UP</b></h1>
            </Col>
            <Col></Col>
            </Row>
        );
        _content.push(
            <Row key="04" className="Signup_Form">
                <Col lg={2}></Col>
                    <Col lg={8}>
                        <form className="Form">
                            <FormGroup >
                            <Row>
                            <Col lg={6}>
                                <FormControl type="text" placeholder="First Name..."/>
                            </Col>
                            <Col lg={6}>
                                <FormControl type="text" placeholder="Last Name..."/>
                            </Col>
                            </Row>
                            </FormGroup>
                        </form>
                        <form className="Form">
                            <FormGroup >
                            <FormControl type="text" placeholder="Username..."/>
                            </FormGroup>
                        </form>
                        <form className="Form">
                            <FormGroup >
                            <FormControl type="email" placeholder="Email..."/>
                            </FormGroup>
                        </form>
                        <form className="Form">
                            <FormGroup >
                            <FormControl type="password" placeholder="Password"/>
                            </FormGroup>
                        </form>
                        <form className="Form">
                            <FormGroup >
                            <FormControl type="password" placeholder="Confirm Password..."/>
                            </FormGroup>
                        </form>
                    </Col>
                <Col lg={2}></Col>            
            </Row>
        );
        _content.push(
            <Row key="06" className="Signup_Form">
                <Col lg={2}></Col>
                <Col lg={8}>
                <a href="/dang-nhap" >Already have an account?</a><br/>
                </Col>
                <Col lg={2}></Col>
            </Row>
        );
        _content.push(
            <Row key="07" className="Signup_Form">
            <Col lg={4}></Col>
            <Col lg={4}>
                <Button bsSize="large" bsStyle="info" block className="button">Sign up</Button>
            </Col>
            <Col lg={4}></Col>
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
export default SignupPage;