import React, { useEffect, useState, Fragment } from 'react';
import ImageGallery from 'react-image-gallery';
import { withRouter, useParams } from 'react-router-dom';

import {
  Container,
  Row,
  Col1, 
  Col2, 
  Model, 
  IconsWrapper, 
  Wrapper,
  Details,
  Title,
  ModelHide,
  TextWrapper,
  ButtonWrapper,
  HR
} from './styles';

import NavbarMain from '../../containers/Navbar';
import CarouselOfCars from '../../components/CarouselOfCars';
import SalesInstruction from '../../components/SalesInstruction';
import Footer from '../../containers/Footer';
import Spinner from '../../components/Spinner';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';

import IconEngine from '../../assets/icons/engine.white.png';
import IconSpeed from '../../assets/icons/speed.white.png';
import IconBag from '../../assets/icons/bag.white.png';
import IconAutomatic from '../../assets/icons/automatic-transmission.svg';
import IconCalendar from '../../assets/icons/calendar.svg';
import IconInvoice from '../../assets/icons/invoice.svg';
import IconMoney from '../../assets/icons/money.svg';
import IconMoney2 from '../../assets/icons/money(1).svg';

const ProductComponent = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  
  console.log('product com id', id)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://admin.zauto.uz/api/car/${id}`);
      const res = await response.json();
      setData(res);
      console.log(res);
    }
    fetchData()
  }, [id]);


    const images = [
      {
        original: `https://admin.zauto.uz/${data.image}`,
        thumbnail: `https://admin.zauto.uz/${data.image}`
      },
      {
        original: 'https://hosty.xxx/i/77c4fd4049fddfadc2734075cc56a8c2f034b4f2.jpg',
        thumbnail: 'https://hosty.xxx/i/77c4fd4049fddfadc2734075cc56a8c2f034b4f2.jpg'
      },
      {
        original: 'https://hosty.xxx/i/1b7d1c49a8531b89d8071c3295a098691ea166ac.jpg',
        thumbnail: 'https://hosty.xxx/i/1b7d1c49a8531b89d8071c3295a098691ea166ac.jpg'
      },
      {
        original: 'https://hosty.xxx/i/dc02d89e3f23d7c60c393aee11972e1e58ac2cff.jpg',
        thumbnail: 'https://hosty.xxx/i/dc02d89e3f23d7c60c393aee11972e1e58ac2cff.jpg'
      },
      {
        original: 'https://hosty.xxx/i/90f2669b0fc3b8ac71d0f2439021d1a0ea66271c.jpg',
        thumbnail: 'https://hosty.xxx/i/90f2669b0fc3b8ac71d0f2439021d1a0ea66271c.jpg'
      }
    ];
    
    return (
    <Fragment>
      <NavbarMain />
      {data ? 
        (<Container>
          <Row>
            <Col1>
              <ModelHide> {data.name} </ModelHide>
              <ImageGallery 
                showFullscreenButton={false} 
                showPlayButton={false}  
                items={images}
                showNav={false}
                useBrowserFullscreen={false}
                autoPlay={true}
                originalClass='image-custom-class'
                thumbnailClass ='image-custom-class'
              />
            </Col1>
            <Col2>
              <Model>{data.name}</Model>
              <Wrapper>
                  <IconsWrapper marginRight35> 
                    <img src={IconEngine} alt="icon"/>
                    <TextWrapper>
                      <Title>Объем двигателя:</Title>
                      <Details>{data.engine} <span>cm3</span></Details>
                    </TextWrapper>
                  </IconsWrapper>
                  <IconsWrapper> 
                    <img src={IconSpeed} alt="icon"/>
                    <TextWrapper>
                      <Title>Макс. мощность:</Title>
                      <Details>{data.speed} <span>л.с</span></Details>
                    </TextWrapper>
                  </IconsWrapper>
              </Wrapper>
              <Wrapper>
                <IconsWrapper> 
                  <img src={IconBag} alt="icon"/>
                  <TextWrapper>
                    <Title>Расход топлива:</Title>
                    <Details>{data.petrol} <span> л/100km</span></Details>
                  </TextWrapper>
                </IconsWrapper>
                <IconsWrapper> 
                  <img src={IconAutomatic} alt="icon"/>
                  <TextWrapper>
                    <Title>Тип КПП:</Title>
                    <Details>{data.petrol}</Details>
                  </TextWrapper>
                </IconsWrapper>
              </Wrapper>
              <HR />
              <Wrapper>
                <IconsWrapper> 
                  <img src={IconCalendar} alt="icon"/>
                  <TextWrapper>
                    <Title>Период</Title>
                    <Details>{data.petrol} 12 <span> месяцев</span></Details>
                  </TextWrapper>
                </IconsWrapper>
                <IconsWrapper>
                  <img src={IconInvoice} alt="icon"/>
                  <TextWrapper>
                    <Title>Общая сумма</Title>
                    <Details>{data.petrol}111, 111 <span> сум</span></Details>
                  </TextWrapper>
                </IconsWrapper>
              </Wrapper>
              <Wrapper>
                <IconsWrapper> 
                  <img src={IconMoney} alt="icon"/>
                  <TextWrapper>
                    <Title>Первоначальный взнос​</Title>
                    <Details>{data.petrol}111, 111 <span> сум</span></Details>
                  </TextWrapper>
                </IconsWrapper>
                <IconsWrapper> 
                  <img src={IconMoney2} alt="icon"/>
                  <TextWrapper>
                    <Title>Ежемесячный взнос</Title>
                    <Details>{data.petrol}111, 111 <span> сум</span></Details>
                  </TextWrapper>
                </IconsWrapper>
              </Wrapper>
              <ButtonWrapper>
                <ButtonPrimary primaryLong primary>Связаться с консультантом</ButtonPrimary>
              </ButtonWrapper>
            </Col2>
          </Row>
        </Container>)
        : (<Spinner />)
      } 
      <CarouselOfCars />
      <SalesInstruction />
      <Footer />
    </Fragment>
    )
};

export default withRouter(ProductComponent);