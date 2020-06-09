import React, {useState, useEffect} from 'react';
import { useHistory }  from 'react-router-dom';

import { 
  Container, 
  SliderStyled, 
  Wrapper
} from './styles';

import Spinner from '../../components/Spinner';

const CarouselOfCars = () => {
  const [ data, setData ] = useState([]);
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);


  // fetching dat from API
  const url = 'https://admin.zauto.uz/api/cars'
  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setLoading(false)
      setData(data)
    }).catch((err) => {
      setLoading(false)
      setError('Fetch Failed!')
    })
  }, [url]);

  // settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const history = useHistory();

    return (
      <Container>
        <SliderStyled {...settings}>
        {
          !loading && data.length ? (data
              .filter((item, idx) => idx < 5)
              .map(({id, image}) => (
                <Wrapper id={id} key={id} onClick={() => history.push(`/${id}`)}>
                  <img src={`https://admin.zauto.uz/${image}`} alt='car'/>
                </Wrapper>
              ))
          ) : <Spinner />
        }
        </SliderStyled>
      </Container>
    );
};

export default CarouselOfCars;