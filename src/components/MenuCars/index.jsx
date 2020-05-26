import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { 
  Container, 
  Heading,  
  Row,
  BtnWrapper
} from './styles';

import MenuItems from '../MenuItems';
import ButtonPrimary from '../Buttons/ButtonPrimary';

const MenuCars = (allCars) => {
  return (
    <Container>
      <Heading>
          Выберите Автомобиль в Рассрочку
      </Heading>
      <Row>
        { allCars.map(({id, ...otherProps}) =>
          (<MenuItems key={id} {...otherProps} />)
        )}
      </Row>
      <BtnWrapper>
        <ButtonPrimary primary>Все aвтомобили</ButtonPrimary>
      </BtnWrapper>
    </Container>
  );
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


const mapStateToProps = (state) => ({
  loading: state.getAllCarsReducer,
  error: state.getAllCarsReducer,
  allCars: state.getAllCarsReducer.allCars,
});


export default connect(mapStateToProps, null)(MenuCars);