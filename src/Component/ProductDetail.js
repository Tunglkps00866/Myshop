import React from 'react';
import {Grid,Row,Col,Breadcrumb,Image,Glyphicon,Tabs,Table,Tab,Button,Panel} from 'react-bootstrap';
import Page from '../Page';
import Data from '../Data';
//import Multitab from './Multitab';
import './ProductDetail.css';

class ProductDetail extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            content:[],
            idProduct: this.props.match.params.idProduct,
            count:0,
        }
    }
    onClickIncrease() {
        this.setState({
            count: this.state.count + 1
        });
    }
    onClickDecrease() {
        this.setState({
            count: this.state.count - 1
        });
    }
    buildContent(){
        console.log(this.props);
        let _content=[];

        let product = Data.getProductById(this.state.idProduct);
        console.log(product);
        _content.push(
            <Row key="01">
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>{product.type}</Breadcrumb.Item>
                <Breadcrumb.Item active>{product.id}</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
        );
        _content.push(
            <Row key="02">
                <Col lg={6}>
                    <Image src={'/'+product.img}></Image> 
                </Col>
                <Col lg={6}>
                    <h3 className="mainform">{product.name}</h3>
                    <p className="mainform">{product.descript}</p>
                    <p className="mainform">{'Prize: '+product.prize}</p>
                    <p className="mainform">{product.des}</p>
                    <form id='myform' method='POST' action='#'>
                        <input type='button' value='-' className='qtyminus' field='quantity' onClick={this.onClickDecrease.bind(this)}/>
                        <input type='text' name='quantity' value={this.state.count} className='input' />
                        <input type='button' value='+' className='qtyplus' field='quantity' onClick={this.onClickIncrease.bind(this)} />
                    </form>
                    <Button bsStyle="default" className="Break">Add to <Glyphicon glyph="shopping-cart" /></Button> 
                </Col>
            </Row>
        );
        _content.push(
            <Row key="03">
                <Col>
                <Panel>
                    <Panel.Body>
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Image">
                            <Image src={'/'+product.desimg01} className="desimg"></Image>
                            <Image src={'/'+product.desimg02} className="desimg"></Image>
                        </Tab>
                        <Tab eventKey={2} title="Detail">
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Tech Specs</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Model</td>
                                    <td>{product.name}</td>
                                    
                                    </tr>
                                    <tr>
                                    <td>Product</td>
                                    <td>{product.descript}</td>
                                    
                                    </tr>
                                    <tr>
                                    <td>Brand</td>
                                    <td>{product.brand}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        </Tabs>
                    </Panel.Body>
                </Panel>
                </Col>
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
export default ProductDetail;