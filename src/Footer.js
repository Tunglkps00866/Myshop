import React from 'react';
import {Grid,Row,Col,Image} from 'react-bootstrap';
import './Footer.css'
class Footer extends React.Component {
    render() {
        return ( 
            <div>
                <hr/>
                <Grid>
                    <Row>                       
                        <Col lg={6}>
                            
                            <h3>Infomation</h3>
                            <Col lg={6}>
                            <a href="/">HOME</a><br/>
                            <a href="/san-pham">PRODUCTS</a><br/>
                            <a href="/gio-hang">CART</a><br/>
                            </Col>
                            <Col lg={6}>
                            <a href="/khuyen-mai">SPECIALOFFER</a><br/>
                            <a href="/gioi-thieu">ABOUT US</a><br/>
                            <a href="/lien-he">CONTACT US</a>
                            </Col>
                        </Col>
                        <Col lg={6}>
                            <h3>Our Partner</h3>
                            <Image src="../Image/MSI-logo.png" className="brand-icon"></Image>
                            <Image src="../Image/logitech-logo.png" className="brand-icon"></Image>
                            <Image src="../Image/corsair-logo.png" className="brand-icon"></Image>
                        </Col>
                    </Row>
                </Grid>
                <hr/>
                <p>Copyright.All rights reserved.</p>
            </div>
        );
    }
}
export default Footer;