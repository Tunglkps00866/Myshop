import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Carousel.css'

class Slider extends React.Component{
    render(){
        return(
            <div>
            <Carousel className="img">
                    <Carousel.Item>
                        <img alt="900x500" src="image/banner-asus.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="900x500" src="image/banner-asus.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="900x500" src="image/banner-asus.jpg" />
                    </Carousel.Item>
            </Carousel>
            </div>
        );
    }
}
export default Slider;