import React, { useState, useEffect } from 'react';

import BestSalesCarousel from '../../components/BestSalesCarousel';

const BestSalesContainer = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // fetch data
  const url = 'https://admin.zauto.uz/api/bestsellercars';
  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      console.log(data)
      setLoading(false);
      setError(error);
    }).catch((err) => {
      setLoading(false)
      setError('Fetch Failed!')
    })
  }, [url]);

  return (
    <>
      <BestSalesCarousel data={data} />
    </>
  );
};

export default BestSalesContainer;