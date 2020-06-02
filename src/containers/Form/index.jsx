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
  InputTel,
  IconWrapper,
  Wrapper,
  Error
} from './styles';

import IconClose from '../../assets/icons/close.svg';
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
        <IconWrapper>
          <img src={IconClose} alt="close"/>
        </IconWrapper>
        <FormStyled onSubmit={this.handleSubmit}>
          <Heading>Заполнить форму</Heading>
          <Input
            type="text"
            name="fullname"
            placeholder="Ф. И. О"
            value={fullname}
            onChange={this.handleChange}
          />
          { 
            submitted && !fullname &&
            <ErrorMessage>
              <Error>Ф. И. О отсутствует!</Error>  
            </ErrorMessage>
          }
          {
            fullname !== '' && fullname.length < 3 ?
            <ErrorMessage>
              <Error>Ф. И. О должно быть более 15 символов!</Error>
            </ErrorMessage>
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
            <ErrorMessage>
              <Error>Номер телефона отсутствует!</Error>
            </ErrorMessage>
          }
          <Wrapper>
            <Checkbox type="checkbox" id="terms" name="terms" />
            <LinkToPolicy to='/policy'>Agree to all terms</LinkToPolicy>            
          </Wrapper>
          <ButtonWrapper>
            <ButtonPrimary orderBtn>Отправить</ButtonPrimary>
          </ButtonWrapper>
        </FormStyled>
      </ContainerStyled>
    );
  };
};

export default Form;
