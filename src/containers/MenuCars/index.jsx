import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Container, 
  Row,
  BtnWrapper,
  ContainerBrandIcons, 
  RowBrandIcons, 
  Heading, 
  ImgChevrolet, 
  ImgHyundai,
  ImgLada
} from './styles';

import Spinner from '../../components/Spinner';
import MenuItems from '../../containers/MenuItems';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';

import LogoHyndai from '../../assets/icons/hyunda.png';
import LogoLada from '../../assets/icons/lada.png';
import LogoChevrolet from '../../assets/icons/chevrolet.png';

const MenuCars = (props) => {
  const [data, setData] = useState({});
  const [itemsToShow, setItemsToShow] = useState({itemsToShow: 12});
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [catId, setCatId] = useState(1);

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

  // filter function of categories
  const found = Object.keys(data).find(key => data[key].id === catId);
  const carList = found ? data[found].car : [];

    return (
      <>
        <ContainerBrandIcons>
          <Heading> Выберите модель автомобиля </Heading>
          <RowBrandIcons>
            <ImgHyundai>
              <img 
                src={LogoHyndai} 
                onClick={() => setCatId(2)} 
                alt="logo-hyundai"
              />
            </ImgHyundai>
            <ImgChevrolet>
              <img 
                src={LogoChevrolet} 
                onClick={() => setCatId(3)} 
                alt="logo-gm"
              />
            </ImgChevrolet>
            <ImgLada>
              <img 
                src={LogoLada} 
                onClick={() => setCatId(1)} 
                alt="logo-lada"
              />
            </ImgLada>
          </RowBrandIcons>
        </ContainerBrandIcons>
        <Container>
            <Row>
              { 
                !loading && carList.length ? (carList
                  .slice(0, 12)
                  .map(({id, ...otherProps}) =>
                      (<MenuItems key={id} id={id} {...otherProps} />))
                ):(<Spinner />)
              }
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
