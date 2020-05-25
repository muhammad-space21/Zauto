import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from "gsap";

import { 
  Container, 
  Heading,  
  Row,
  BtnWrapper
} from './styles';

import MenuItems from '../MenuItems';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import { data } from '../../mockData/index';


const MenuCars = () => {
  const { carsDataMenu } = data;
   // Ref for our element
  const sectionRef = useRef(null);
   // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

   // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  };
   // Animation for fading out
  const fadeOut = element => {
    // gsap.to(element, 1, {
    //   opacity: 0,
    //   y: -20,
    //   ease: "power4.out"
    // });
  };

   // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  return (
    <Container className='fadeIn' ref={sectionRef}>
      <Heading>
          Выберите Автомобиль в Рассрочку
      </Heading>
      <Row>
        { carsDataMenu.map(({id, ...otherProps}) =>
          (<MenuItems key={id} {...otherProps} />)
        )}
      </Row>
      <BtnWrapper> 
        <ButtonPrimary primary>Все aвтомобили</ButtonPrimary>
      </BtnWrapper>
    </Container>
  );
};

export default MenuCars;