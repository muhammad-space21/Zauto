import {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const useForm = (callback) => {
  const {id} = useParams();
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [instruction, setInstruction] = useState(true);
  const [inputs, setInputs] = useState({
    fullname: '', phone: '', car_id: id
  });


  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    // callback();
    setLoading(true)
    setSubmit(true)
    // send data to API
    axios.post('https://admin.zauto.uz/api/orders', inputs)
    .then(function (response) {
      if (response.status === 200) {
        setSuccess(true)
        setLoading(false)
        setInstruction(false)
        setSubmit(false)
        console.log('response in success', response)
      } else {
        setError(true)
        setLoading(false)
        setInstruction(false)
        setSubmit(true)
      }
      console.log('response in error', response)
    })
    .catch(function (error) {
        setError(true)
        setLoading(false)
        setSuccess(false)
        setInstruction(false)
        console.log(error)
    }) 
    console.log(inputs);

    // clear form
    if (inputs.fullname 
      && inputs.phone 
      && submit 
      && inputs.car_id) {
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
  // if (submit && inputs.fullname.length < 15) {
  //   setError(true);
  // };

  return {
    handleSubmit,
    handleChange,
    inputs,
    submit,
    error,
    loading,
    success,
    instruction
  };
};

export default useForm;