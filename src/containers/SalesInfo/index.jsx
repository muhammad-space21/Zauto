import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Row, 
  Col1, 
  Col2, 
  Text, 
  Option,
  Value, 
  ButtonsWrapper
} from './styles';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import SalesTable from '../../containers/SalesTable';


const images = [
  {
    original: 'https://hosty.xxx/i/2ea5404e4f30d46f163ab1640ec25cde3c2077c2.jpg',
    thumbnail: 'https://hosty.xxx/i/2ea5404e4f30d46f163ab1640ec25cde3c2077c2.jpg'
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


const SalesInfo = () => {
  const [state, setState] = useState(true);
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/form`; 
    history.push(path);
  }

  function toggle () {
    setState(!state);
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col1>
            <ImageGallery 
              showFullscreenButton={false} 
              showPlayButton={false}  
              items={images}
              showNav={false}
            />
          </Col1>
          <Col2>
            <Text>
              <Option>
                  Model:
              </Option>
              <Value>
                  Spark, AT 3 позиция
              </Value>
            </Text>
            <Text>
              <Option>
                  Avtomobilning umumiy narxi:
              </Option>
              <Value>
                  92,821,000.00
              </Value>
            </Text>
            <Text>
              <Option>
                  Kreditning maksimal miqdori:
              </Option>
              <Value>
                  60,333,650.00
              </Value>
            </Text>
            <Text>
              <Option>
                  Birinchi to'lov miqdori:
              </Option>
              <Value>
                  32,487,350.00
              </Value>
            </Text>
            <Text>
              <Option>
                  Kredit muddati:
              </Option>
              <Value>
                  24 oy
              </Value>
            </Text>
            <Text>
              <Option>
                  Birinchi to'lov foizda:
              </Option>
              <Value>
                  35%
              </Value>
            </Text>
          <ButtonsWrapper>
              <ButtonPrimary onClick={toggle} applyBtn>Калькулятор</ButtonPrimary>
              <ButtonPrimary onClick={routeChange} applyBtn>ОСТАВИТЬ ЗАЯВКУ</ButtonPrimary>
          </ButtonsWrapper>
        </Col2>
        </Row>
      </Container>
      { !state ? (<SalesTable />) : null}
    </React.Fragment>
  )
};

export default SalesInfo;