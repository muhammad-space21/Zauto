import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import {
  Container, 
  Row,
  BtnWrapper
} from './styles';

import Spinner from '../../components/Spinner';
import MenuItems from '../../containers/MenuItems';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';

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
  };

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
    return (
      <Container>
          <Row>
            { 
              /*
                allCars.length ? ( allCars
                .slice(0, itemsToShow)
                .map(({id, ...otherProps}) =>
                    (<MenuItems key={id} id={id} {...otherProps} />)
                  )) : (<Spinner />)
              */
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
              expanded ? <span>Показывай меньше</span>
              : 
              <span>Показать больше</span>
            }
          </ButtonPrimary>
        </BtnWrapper>
      </Container>
    )
  }
};

export default withRouter(MenuCars);
