import React from 'react';
import Page from '../Page';
import Carosel from '../Carousel';
import Data from '../Data';
import {Grid,Row,Col} from 'react-bootstrap';
import Products from './Products'

import '../Component/HomePage.css';
class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            content:[],
            idProduct: this.props.match.params.idProduct,
        }
    }
    buildContent(){
        let _content=[];
        {/*let product = Data.getProductById(this.state.idProduct);*/}
        let data= Data.getProducList();
        for (var i in data){
            _content.push(
            <Col key={i} sx={6} md={4}>
                <Products data={data[i]}></Products>
            </Col>
            );
        }
        let _productContent = []
        _productContent.push(<Carosel key="12"></Carosel>)
        _productContent.push(<Grid key="content"><Row key={i}>{_content}</Row></Grid>)
        return _productContent;
    }
    componentDidMount(){
        this.setState({
            content: this.buildContent()
        });
    }
    render(){
        return(
            <div>
            <Page content={this.state.content}></Page>
            </div>
        );
    }
}
export default HomePage;