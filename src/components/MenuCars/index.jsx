import React from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import axios from 'axios';

import {
  Container, 
  Heading,  
  Row,
  BtnWrapper
} from './styles';

import Spinner from '../Spinner';
import MenuItems from '../MenuItems';
import ButtonPrimary from '../Buttons/ButtonPrimary';

class MenuCars extends React.Component {
  constructor() {
    super()
    this.state = {
      allCars: []
    }
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `catalog`;
    this.props.history.push(path);
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
            Выберите Автомобиль в Рассрочку
        </Heading>
          <Row>
            { allCars.length ? ( allCars
            .filter((item, idx) => idx < 9)
            .map(({id, ...otherProps}) =>
                (<MenuItems key={id} {...otherProps} />)
              )) : (<Spinner />)
            }
          </Row>        
        <BtnWrapper>
          <ButtonPrimary onClick={this.routeChange} primary>Все aвтомобили</ButtonPrimary>
        </BtnWrapper>
      </Container>
    )
  }
};

// MenuCars.defaultProps = {
//   loading: false,
//   error: false,
//   allCars: []
// };

// MenuCars.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.bool,
//   getAllCars: PropTypes.func.isRequired
// };


// const mapStateToProps = (state) => ({
//   loading: state.getAllCarsReducer,
//   error: state.getAllCarsReducer,
//   allCars: state.getAllCarsReducer,
// });

// export default connect(mapStateToProps, null)(MenuCars);

export default withRouter(MenuCars);