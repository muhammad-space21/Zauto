import React from 'react';

import { 
  Container, 
  Row, 
  Col1, 
  Col2, 
  ButtonsWrapper,
  Text,
  Option,
  Value
} from './styles';

import ImageCar from '../../assets/images/spark.png';

const PricesInfo = () => (
  <Container>
    <Row>
      <Col1>
        <img src={ImageCar} alt="car"/>
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
              Kredit va garov sug'urtasi xarajatlari:
          </Option>
          <Value>
              1,508,341.25
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
          <Option active>
              Imtiyoz muddati:
          </Option>
          <Value active>
              1 oy 
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
      </Col2>
    </Row>
    <ButtonsWrapper>

    </ButtonsWrapper>
  </Container>
);

export default PricesInfo;