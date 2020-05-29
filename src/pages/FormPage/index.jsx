import React from 'react';

import { Container, Row, Col1, Col2 } from './styles';

import Form from '../../containers/Form';
import HeaderCarousel from '../../components/HeaderCarousel';

const FormPage = () => (
  <Container>
    <Row>
      <Col1>
        <HeaderCarousel />
      </Col1>
      <Col2>
        <Form />
      </Col2>
    </Row>
  </Container>
);

export default FormPage;