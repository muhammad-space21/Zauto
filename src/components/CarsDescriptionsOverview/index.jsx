import React, { useEffect, useState } from  'react';

import { Container } from './styles';

import DescriptionComponentOne from '../DescriptionComponentOne';
import DescriptionComponentTwo from '../DescriptionComponentTwo';
import DescriptionComponentThree from '../DescriptionComponentThree';
import Spinner from '../Spinner';

const CarsDescriptionsOverview = () => {
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
      console.log('data in overview', data)
    }).catch((err) => {
      setLoading(false)
      setError('Fetch Failed!')
    })
  }, [url]);

  return (
    <Container>
      {
        !loading && data.length ? (data
            .slice(0, 1)
            .filter((item, idx) => idx < 1)
            .map(({id, ...otherProps}) => (
              <DescriptionComponentOne key={id} id={id} {...otherProps} />
            ))
          ) : <Spinner />
      } 
      {
        !loading && data.length ? (data
            .slice(8, 9)
            .filter((item, idx) => idx < 1)
            .map(({id, ...otherProps}) => (
              <DescriptionComponentThree key={id} id={id} {...otherProps} />
            ))
          ) : <Spinner />
      }
      {
        !loading && data.length ? (data
            .slice(3, 4)
            .filter((item, idx) => idx < 1)
            .map(({id, ...otherProps}) => (
              <DescriptionComponentTwo key={id} id={id} {...otherProps} />
            ))
          ) : <Spinner />
      }
    </Container>
  )
};

export default CarsDescriptionsOverview;