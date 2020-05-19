import React from 'react';

import { 
  Container, 
  SliderStyled, 
  ButtonWrapper,
  Wrapper
} from './styles';

import ButtonPrimary from '../Buttons/ButtonPrimary';

import  Img1 from '../../assets/images/1-2.jpg';
import Img2 from '../../assets/images/1-3.jpg';
import Img3 from '../../assets/images/1-4.jpg';
import Img4 from '../../assets/images/santa-fi.jpg';
import Img5 from '../../assets/images/foto-sonata.jpg';

class CarouselOfCars extends React.Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 5,
      autoplay: true,
      centerMode: true,
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
        <SliderStyled {...settings}>
          <Wrapper>
            <img src={Img1} alt='' />
          </Wrapper>
          <Wrapper>
            <img src={Img2} alt=''/>
          </Wrapper>
          <Wrapper>
            <img src={Img3} alt=''/>
          </Wrapper>
          <Wrapper>
            <img src={Img4} alt=''/>
          </Wrapper>
          <Wrapper>
            <img src={Img5} alt=''/>
          </Wrapper>
        </SliderStyled>
        <ButtonWrapper>
          <ButtonPrimary applyBtn >ОСТАВИТЬ ЗАЯВКУ</ButtonPrimary>
        </ButtonWrapper>
      </Container>
    );
  }
};

export default CarouselOfCars;