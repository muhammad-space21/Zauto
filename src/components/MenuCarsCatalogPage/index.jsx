import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import {
  Container, 
  Heading,  
  Row
} from './styles';

import Spinner from '../Spinner';
import MenuItems from '../MenuItems';

class MenuCarsCatalogPage extends React.Component {
  constructor() {
    super()
    this.state = {
      allCars: []
    }
  }

  componentDidMount() {
    axios.get('https://admin.zauto.uz/api/cars')
      .then(res => {
        console.log(res);
        this.setState({
          allCars: res.data
        })
      })
  }

  render() {
    const {allCars} = this.state;
    return(
      <Container>
        <Heading>
          Выберите модель автомобиля
        </Heading>
          <Row>
            { allCars.length ? ( allCars
            .map(({id, ...otherProps}) =>
                (<MenuItems key={id} {...otherProps} />)
              )) : (<Spinner />)
            }
          </Row>        
      </Container>
    )
  }
};

export default withRouter(MenuCarsCatalogPage);