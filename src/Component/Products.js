import React from 'react';
import {Grid,Row,Col,Thumbnail,Button,Glyphicon} from 'react-bootstrap';
class Products extends React.Component{
    render(){
        return(
            <div className="product-item">
                <Grid>
                    <Row>
                        <Col lg={4}>
                        <a href={"/chi-tiet/"+this.props.data.id}>
                        <Thumbnail src={this.props.data.img} alt="242x200">
                            <h4>{this.props.data.name}</h4>
                            <p>
                            
                            &nbsp;
                            <Button bsStyle="default">Add to <Glyphicon glyph="shopping-cart" /></Button>
                            </p>
                        </Thumbnail>
                        </a>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Products;