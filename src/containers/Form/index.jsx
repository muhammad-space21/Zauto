import React from 'react';
import axios from 'axios';

import {
  ContainerStyled,
  Heading,
  FormStyled,
  TextWrapper,
  Input,
  ErrorMessage,
  ButtonWrapper,
  Checkbox,
  LinkToPolicy,
  InputTel
} from './styles';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      phone: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // destructuring
    const {
      fullname,
      phone,
    } = this.state;

    const payload = {
      fullname,
      phone,
    };

    axios({
      method: 'post',
      url: 'https://admin.zauto.uz/api/orders',
      data: payload
    }).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error);
    });

    this.setState({ submitted: true })
    // clear form
    if (
      fullname 
      && phone  
    ) {
      this.setState({
        fullname: '',
        phone: '',
        submitted: false
      })
      console.log(this.state);
    }
  }

  render() {
    const {
      fullname, 
      phone,
      submitted
    } = this.state;
    return (
      <ContainerStyled>
        <FormStyled onSubmit={this.handleSubmit}>
          <TextWrapper>
            <Heading>Заполнить форму</Heading>
          </TextWrapper>
          <Input
            type="text"
            name="fullname"
            placeholder="Имя"
            value={fullname}
            onChange={this.handleChange}
          />
          { 
            submitted && !fullname &&
            <ErrorMessage>Имя отсутствует!</ErrorMessage>
          }
          {
            fullname !== '' && fullname.length < 3 ?
            <ErrorMessage>Имя должно быть более 3 символов!</ErrorMessage>
            : null
          }
          <InputTel
            type="tel"
            name="phone"
            placeholder="Ваш номер телефона"
            value={phone}
            onChange={this.handleChange}
            maskChar=""
          />
          { 
            submitted && !phone &&
            <ErrorMessage>Номер телефона отсутствует!</ErrorMessage>
          }
              <Checkbox type="checkbox" id="terms" name="terms" />
              <LinkToPolicy to='/policy'>Agree to all terms</LinkToPolicy>            
          <ButtonWrapper>
            <ButtonPrimary orderBtn>Отправить</ButtonPrimary>
          </ButtonWrapper>
        </FormStyled>
      </ContainerStyled>
    );
  };
};

export default Form;
