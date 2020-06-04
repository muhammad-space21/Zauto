import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Container, 
  Row,
  BtnWrapper
} from './styles';

import Spinner from '../../components/Spinner';
import MenuItems from '../../containers/MenuItems';
import BrandIcons from '../../components/BrandIcons';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';

const MenuCars = () => {
  const [data, setData] = useState({});
  const [itemsToShow, setItemsToShow] = useState({itemsToShow: 12});
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
 

  //fetching data
  const url = 'https://admin.zauto.uz/api/newcars';
  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setLoading(false);
      setData(data);
      console.log(data)
    }).catch((err) => {
      setLoading(false);
      setError('Fetch Failed!');
    })
  }, [url]);

  function getAllData (data) {
    for (data of category) {
      showData(category.car)
    }
  }
 
  function showData (category) {
   for (category of car) {

   }
  }
  

  // showMore function
  function showMore (data) {
    if (itemsToShow === 12) {
      setItemsToShow(data.length);
      setExpanded(true);
    } else {
      setItemsToShow({itemsToShow: 12});
      setExpanded(false);
    }
  };

  console.log(data);
    return (
      <>
      <BrandIcons />
      {/* <h1 onClick={showHyundai}>Hyundai</h1>
      <h1 onClick={showChevrolet}>Chevrolet</h1>
      <h1 onClick={showLada}>Lada</h1> */}
        <Container>
            <Row>
              {/* { 
                !loading && data.length ? (data
                  .slice(0, 12)
                  .map(({id, ...otherProps}) =>
                      (<MenuItems key={id} id={id} {...otherProps} />))
                ):(<Spinner />)
              } */}
            </Row>        
          <BtnWrapper>
            <ButtonPrimary 
              primary
              onClick={showMore}
            >
              {
                expanded ? <span>Показывай меньше</span>
                : 
                <span>Показать больше</span>
              }
            </ButtonPrimary>
          </BtnWrapper>
        </Container>
      </>
    )
  };

export default withRouter(MenuCars);
