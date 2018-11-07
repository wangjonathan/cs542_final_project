import React, { Component } from 'react';
import Slider from "react-slick";
import { Image, Container } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap';

import Poster from '../../../image/avengers-infinity-war-movie-poster-international.png';

class Home extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerMode: true
    };
    return (
      <Container>
        {/* <Slider {...settings}>
        <div>
          <Image src={Poster} size='big' centered/>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}
        <Carousel>
          <Carousel.Item>
            <img width={1095} height={500} alt="900x500" src={Poster} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1095} height={500} alt="900x500" src={Poster} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1095} height={500} alt="900x500" src={Poster} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
};

export default Home;