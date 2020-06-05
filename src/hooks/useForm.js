import {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const useForm = (callback) => {
  const {id} = useParams();
  const [submit, setSubmit] = useState(false);
  const [inputs, setInputs] = useState({
    fullname: '', phone: '', car_id: id
  });

  // const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    // callback();
    setSubmit(true);
    // send data to API
    axios.post('https://admin.zauto.uz/api/orders', inputs)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    }) 
    console.log(inputs);

    // clear form
    if (inputs.fullname && inputs.phone && submit && inputs.car_id) {
      setInputs({
        fullname: '',
        phone: '',
        car_id: ''
      },
      setSubmit(true)
      )
    }
  };

  // handling input change
  const handleChange = (event) => {
    event.persist();
    setInputs(inputs => (
      {...inputs, [event.target.name]: event.target.value}
    ));
  };
  
  //validation
  // if (submit && fullname.length < 15) {
  //   setError(true);
  // };

  return {
    handleSubmit,
    handleChange,
    inputs,
    submit
    // error
  };
};

export default useForm;