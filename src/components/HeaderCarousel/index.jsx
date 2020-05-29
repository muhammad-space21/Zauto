import React, {useState} from 'react';

import { 
  CarouselItem,
  Container
} from './styles';

import { Carousel } from 'react-bootstrap';

import Img1 from '../../assets/image-decorations/accent.jpg';
import Img2 from '../../assets/image-decorations/elantra.jpg';
import Img3 from '../../assets/image-decorations/gentra.jpg';
import Img4 from '../../assets/image-decorations/malibu.jpg';
import Img5 from '../../assets/image-decorations/xrayNEW.jpg';


const HeaderCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel 
        interval={2000} 
        activeIndex={index} 
        onSelect={handleSelect}
      >
        <CarouselItem>
          <img
            className="w-100"
            src={Img1}
            alt="First slide"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="w-100"
            src={Img2}
            alt="Second slide"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="w-100"
            src={Img3}
            alt="Third slide"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="w-100"
            src={Img4}
            alt="Fourth slide"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="w-100"
            src={Img5}
            alt="Fifth slide"
          />
        </CarouselItem>
      </Carousel>
    </Container>
  );
};

export default HeaderCarousel;