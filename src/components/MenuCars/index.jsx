import React from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import axios from 'axios';

import {
  Container, 
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
      allCars: [],
      itemsToShow: 12,
      expanded: false
    }
    this.showMore = this.showMore.bind(this);
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

  showMore() {
    const { allCars, itemsToShow, expanded } = this.state;
    itemsToShow === 12 ? (
      this.setState({ 
        itemsToShow: allCars.length, 
        expanded: true 
      })
    ) : (
      this.setState({
        itemsToShow: 12, 
        expanded: false
      })
    )
  };

  render() {
    const { allCars, itemsToShow, expanded } = this.state;
    return(
      <Container>
          <Row>
            { 
              allCars.length ? ( allCars
                .slice(0, itemsToShow)
                .map(({id, ...otherProps}) =>
                    (<MenuItems key={id} {...otherProps} />)
                  )) : (<Spinner />)
            }
          </Row>        
        <BtnWrapper>
          <ButtonPrimary 
            primary
            onClick={this.showMore}
          >
            {
              expanded ? <span>Show less</span>
              : 
              <span>Show more</span>
            }
          </ButtonPrimary>
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