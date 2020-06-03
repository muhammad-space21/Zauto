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

import ImageHeader1 from '../../assets/images/hyundai.header.jpg';
import ImageHeader2 from '../../assets/images/merc.header.jpg';

const Header = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel 
        indicators={false} 
        interval={2000} 
        activeIndex={index} 
        onSelect={handleSelect}
      >
        <CarouselItem>
          <img
            className="w-100"
            src={ImageHeader1}
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
            src={ImageHeader2}
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

export default Header;