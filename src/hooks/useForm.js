import {useState} from 'react';

const useForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const [submit, setSubmit] = useState(false);
  // const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    // callback();
    setSubmit(true);
    console.log(inputs);

    // clear form
    if (inputs.fullname && inputs.phone && submit) {
      setInputs({
        fullname: '',
        phone: ''
      },
      setSubmit(false));
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
    submit,
    // error
  };
};

export default useForm;