import React from 'react';

import { 
  Container, 
  SliderStyled, 
  Wrapper,
  Heading,
  Title
} from './styles';

import  Img1 from '../../assets/images/gentra.jpg';
import Img2 from '../../assets/images/gentra.jpg';
import Img3 from '../../assets/images/Cobalt.psd2.png';


class BestSalesCarousel extends React.Component {

  render() {
    var settings = {
      dots: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      centerMode: false,
      infinite: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Container>
        <Heading>Лучшие Продажи</Heading>
        <SliderStyled {...settings}>
          <Wrapper>
            <img src={Img1} alt='car' />
            <Title>Car Model</Title>
          </Wrapper>
          <Wrapper>
            <img src={Img2} alt='car'/>
            <Title>Car Model</Title>
          </Wrapper>
          <Wrapper>
            <img src={Img3} alt='car'/>
            <Title>Car Model</Title>
          </Wrapper>
          <Wrapper>
            <img src={Img3} alt='car'/>
            <Title>Car Model</Title>
          </Wrapper>
          <Wrapper>
            <img src={Img3} alt='car'/>
            <Title>Car Model</Title>
          </Wrapper>
        </SliderStyled>
      </Container>
    );
  }
};

export default BestSalesCarousel;