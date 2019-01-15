import React from 'react';
import Page from '../Page';
import '../Component/PaymentPage.css'
import {Breadcrumb,Col,Row,Grid,FormControl,FormGroup,Glyphicon,Image,Button} from 'react-bootstrap';
import Select from 'react-select';


const CountryList = [
    { label: "Ho Chi Minh", value: 1 },
    { label: "Ha Noi", value: 2 },
    { label: "Hai Phong", value: 3 },
    { label: "Da Nang", value: 4 },
    { label: "Hue", value: 5 },
  ];
class PaymentPage extends React.Component{
    buildContent(){
        let _content=[];
        _content.push(
            <Row key="01">
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/gio-hang">MyCart</Breadcrumb.Item>
                <Breadcrumb.Item active>MyPayment</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
        );
        _content.push(
            <Row key="02">
                <Col lg={6}>
                    <h3>YOUR PAYMENT</h3>
                </Col>
            </Row>
        );
        _content.push(
            <Row key="03">
                <Col md={6}>
                    <h4><Glyphicon glyph="info-sign"></Glyphicon>Personal Infomation</h4>
                    <form>
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
                    <form>
                        <FormGroup >
                        <FormControl type="text" placeholder="Address..."/>
                        </FormGroup>
                    </form>
                    <form>
                        <FormGroup >
                        <FormControl type="email" placeholder="Email..."/>
                        </FormGroup>
                    </form>
                    <form >
                        <FormGroup >
                        <FormControl type="text" placeholder="Phone..."/>
                        </FormGroup>
                    </form>
                    <form>
                        <FormGroup >
                        <FormControl type="text" placeholder="City..."/>
                        </FormGroup>
                    </form>
                    <form>
                        <FormGroup >
                        <Row>
                        <Col lg={6}>
                        <Select options={ CountryList } />
                        </Col>
                        <Col lg={6}>
                            <FormControl type="text" placeholder="Postal/Zip code..."/>
                        </Col>
                        </Row>
                        </FormGroup>
                    </form>
                </Col>
                <Col md={6} >
                    <h4><Glyphicon glyph="info-sign"></Glyphicon>Payment Method</h4>
                    
                        <Image className="icon" src="image/mastercard.png"></Image>
                        <Image className="icon" src="image/visa.png"></Image>
                    
                    <form>
                        <FormGroup >
                        <FormControl type="text" placeholder="CardName..."/>
                        </FormGroup>
                    </form>
                    <form>
                        <FormGroup >
                        <FormControl type="text" placeholder="CardNumber..."/>
                        </FormGroup>
                    </form>
                    <Row>
                        <Col md={6}>
                            <form>
                                <h5>Date:</h5>
                                <FormGroup>
                                <FormControl type="date" placeholder="MM/DD/YYYY..."/>
                                </FormGroup>
                            </form>
                        </Col>
                        <Col md={6}>
                            <form>
                                <h5>CVV Code:</h5>
                                <FormGroup>
                                <FormControl type="text"/>
                                </FormGroup>
                            </form>
                        </Col>
                    </Row>
                    <h4>Total Amount:</h4>
                    <Button bsStyle="primary" bsSize="large" block className="button">
                        PAY
                    </Button>
                </Col>
                
            </Row>
        )
        _content.push(
            
        )
        return (<Grid>{_content}</Grid>)
    }
    render(){
        return(
            <Page content={this.buildContent()}></Page>
        );
    }
}
export default PaymentPage;