import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from "gsap";

import { 
  Container, 
  Heading, 
  HR, 
  Row 
} from './styles';

import MenuItems from '../MenuItems';
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
          ВЫБЕРИТЕ АВТОМОБИЛЬ В РАССРОЧКУ
      </Heading>
      <HR />
      <Row>
        { carsDataMenu.map(({id, ...otherProps}) =>
          (<MenuItems key={id} {...otherProps} />)
        )}
      </Row>
    </Container>
  );
};

export default MenuCars;