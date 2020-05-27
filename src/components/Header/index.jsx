import React, {useState} from 'react';

import { 
  Heading, 
  ButtonContainer,
  CarouselItem,
  CarouselCaption,
  Container
} from './styles';

import { Carousel } from 'react-bootstrap';
import ButtonPrimary from '../Buttons/ButtonPrimary';

import ImageHeaderMalibu from '../../assets/images/header-malibu.jpg';
import ImageHeaderMerc from '../../assets/images/mers1.png';

const HeaderCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel 
        indicators={false} 
        interval={1000} 
        activeIndex={index} 
        onSelect={handleSelect}
      >
        <CarouselItem>
          <img
            className="w-100"
            src={ImageHeaderMalibu}
            alt="First slide"
          />
          <CarouselCaption>
            <Heading>
                НОВЫЙ АВТОМОБИЛЬ В РАССРОЧКУ
            </Heading>
            <ButtonContainer>
              <ButtonPrimary>Купить новые автомобили</ButtonPrimary>
            </ButtonContainer>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img
            className="w-100"
            src={ImageHeaderMerc}
            alt="Second slide"
          />
          <CarouselCaption>
            <Heading>
              ПОДЕРЖАННЫЙ АВТОМОБИЛЬ В РАССРОЧКУ
            </Heading>
            <ButtonContainer>
              <ButtonPrimary>Купить Б/У автомобиль</ButtonPrimary>
            </ButtonContainer>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>
    </Container>
  );
};

export default HeaderCarousel;