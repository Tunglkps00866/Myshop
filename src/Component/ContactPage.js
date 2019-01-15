import React from 'react';
import Page from '../Page';
import '../Component/ContactPage.css'
import {Grid, Breadcrumb,Image,Row,Col,Button,FormGroup,FormControl} from 'react-bootstrap';
class ContactPage extends React.Component{
    buildContent() {

        let _content = [];
        _content.push(
            <Row key="01">
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
        );
        _content.push(
            <Row key="row-02">
                <Col lg={2}></Col>
                    <Col lg={8}>
                        <Image src="../Image/Map.png" className="Map"></Image>
                    </Col>
                <Col lg={2}></Col>
            </Row>
        );
        _content.push(
            <Row key="row-03">
                <Col lg={4} className="Page">
                        <Image src="../Image/mapmarker.png" className="Symbol-img"></Image>
                            <p>
                            227 Nguyen Van Luong Street, Ward 11, District 6    
                            </p>
                </Col>
                <Col lg={4} className="Page">
                        <Image src="../Image/phone.png" className="Symbol-img"></Image>
                            <p>    
                            012.345.678 - 010.121.1314    
                            </p>
                </Col>
                <Col lg={4} className="Page">
                    <Image src="../Image/mail.png" className="Symbol-img"></Image>
                            <p> 
                                Example@gmail.com 
                            </p>
                </Col>
            </Row>
        );
        _content.push(
            <Row key="row-04">
                <Col></Col>
                    <Col lg={12}>
                        <div className="Page">
                            <h2><b>YOUR FEEDBACK</b></h2>
                        </div>
                    </Col> 
                <Col></Col>
            </Row>
        );
        _content.push(
            <Row key="row-05">
                        <Col lg={2}></Col>
                        <Col lg={8}>
                        <form>
                            <FormGroup controlId="formBasicText">
                            <FormControl type="text" placeholder="Your Name..."/>
                            <br/>
                            <FormControl type="text" placeholder="Your Email..."/>
                            <br/>
                            <FormControl type="text" placeholder="Subject..."/>
                            <br/>
                            <FormControl componentClass="textarea" placeholder="Message..." />
                            </FormGroup>
                        </form>
                        <Button bsStyle="info" className="button">Send</Button>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
        );
        return (<Grid>{_content}</Grid>);
    }
    render(){
        return(
            <Page content={this.buildContent()}></Page>
        );
    }
}
export default ContactPage;