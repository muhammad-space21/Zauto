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
import FormPage from '../../pages/FormPage';

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
  const [open, setOpen] = useState(false);
  
  // fetch data from API
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
      // {
      //   original: `https://admin.zauto.uz/${data.gallery[0]}`,
      //   thumbnail: `https://admin.zauto.uz/${data.gallery[0]}`
      // },
      // {
      //   original: `https://admin.zauto.uz/${data.gallery[1]["gallery_image"]}`,
      //   thumbnail: `https://admin.zauto.uz/${data.gallery[1]["gallery_image"]}`
      // },
      // {
      //   original: `https://admin.zauto.uz/${data.gallery[2]["gallery_image"]}`,
      //   thumbnail: `https://admin.zauto.uz/${data.gallery[2]["gallery_image"]}`
      // },
      // {
      //   original: `https://admin.zauto.uz/${data.gallery[3]["gallery_image"]}`,
      //   thumbnail: `https://admin.zauto.uz/${data.gallery[3]["gallery_image"]}`
      // }
    ];
    
    return (
    <Fragment>
      <NavbarMain />
      {data.image ? 
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
                    <Details>{data.typekpp === 1 ? 'АКПП' : 'МКПП'}</Details>
                  </TextWrapper>
                </IconsWrapper>
              </Wrapper>
              <HR />
              <Wrapper>
                <IconsWrapper> 
                  <img src={IconCalendar} alt="icon"/>
                  <TextWrapper>
                    <Title>Период</Title>
                    <Details> 36 <span> месяцев</span></Details>
                  </TextWrapper>
                </IconsWrapper>
                <IconsWrapper>
                  <img src={IconInvoice} alt="icon"/>
                  <TextWrapper>
                    <Title>Общая сумма</Title>
                    <Details>{data.price}<span> сум</span></Details>
                  </TextWrapper>
                </IconsWrapper>
              </Wrapper>
              <Wrapper>
                <IconsWrapper> 
                  <img src={IconMoney} alt="icon"/>
                  <TextWrapper>
                    <Title>Первоначальный взнос​</Title>
                    <Details>{data.primary_price} <span> сум</span></Details>
                  </TextWrapper>
                </IconsWrapper>
                <IconsWrapper> 
                  <img src={IconMoney2} alt="icon"/>
                  <TextWrapper>
                    <Title>Ежемесячный взнос</Title>
                    <Details>{data.price_per_month}<span> сум</span></Details>
                  </TextWrapper>
                </IconsWrapper>
              </Wrapper>
              <ButtonWrapper>
                <ButtonPrimary 
                  primaryLong 
                  primary
                  onClick={() => setOpen(true)}
                >
                  Связаться с консультантом
                </ButtonPrimary>
              </ButtonWrapper>
            </Col2>
          </Row>
        </Container>)
        : (<Spinner />)
      }
      {open && <FormPage />}
      <CarouselOfCars />
      <SalesInstruction />
      <Footer />
    </Fragment>
    )
};

export default withRouter(ProductComponent);