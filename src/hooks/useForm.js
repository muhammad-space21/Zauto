import React, {useState} from 'react';

const useForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    // callback();
    setSubmit(true);
  };

  const handleChange = (event) => {
    event.persist();
    setInputs(inputs => (
      {...inputs, [event.target.name]: event.target.value}
    ));
  };

  return {
    handleSubmit,
    handleChange,
    inputs,
    submit
  };
};

export default useForm;