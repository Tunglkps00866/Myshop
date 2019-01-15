import React from 'react';
import Page from '../Page';
import {Breadcrumb,Col,Image,Grid,Row} from 'react-bootstrap';
import '../Component/AboutPage.css';
class AboutPage extends React.Component{
    buildContent() {

        let _content = [];
        _content.push(
            <Row key="01">
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>About Us</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
        );
        _content.push(
            <Row key="02">
                <Col lg={2}></Col>
                    <Col lg={8}>
                        <div className="Page">
                            <h1><b>ABOUT US</b></h1>
                            <br/>
                            <Image src="../Image/About.jpg" className="Panel_Img"></Image>
                            <br/>
                            <br/>
                            <p className="text">Job duties: Research, analyze, and conceptualize business strategies for profitable penetration into new and/or existing market segments. Monitor and analyze company's business consumer information file to ensure efficient maintenance of company's sales channels and distribution channels meeting customer needs; and collect data and conduct qualitative and quantitative analysis in order to forecast and monitor business, marketing and sales trends. Analyze company's business systems to develop and devise methods and procedures to collect data, perform international costing and pricing analysis, formulate competition and market situation analysis according to the business environment and economic development of consumer markets in U.S., Latin America, and Europe. Analyze and profile existing customers and potential customers to enhance database marketing initiatives; and perform marketing campaign activities and ensure data integrity and consistence are achieved across all Sales and Marketing systems. Research, collect, create and maintain an active categorical database of prospects and leads.</p>    
                        </div>
                    </Col>
                <Col lg={2}></Col>            
            </Row>
        )
        return (<Grid>{_content}</Grid>);
    }
    render(){
        return(
            <Page content={this.buildContent()}></Page>
        );
    }
}
export default AboutPage;