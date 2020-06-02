import React, { useState } from 'react';

import { 
  Container, 
  Wrapper, 
  Component, 
  Row, 
  Col1, 
  Col2,
  IconWrapper,
} from './styles';

import Form from '../../containers/Form';
import HeaderCarousel from '../../components/HeaderCarousel';
import IconClose from '../../assets/icons/close.svg';

const FormPage = () => {
  const [close, setClose] = useState(true);

  return (
    <>
      {close && 
        <Container>
          <Wrapper>
            <Component>
              <Row>
                <Col1>
                  <HeaderCarousel />
                </Col1>
                <Col2>
                  <IconWrapper>
                    <img 
                      src={IconClose} 
                      onClick={() => setClose(false)} 
                      alt="close"
                    />
                  </IconWrapper>
                  <Form />
                </Col2>
              </Row>
            </Component>
          </Wrapper>
        </Container>
      }
  </>
  );
};

export default FormPage;