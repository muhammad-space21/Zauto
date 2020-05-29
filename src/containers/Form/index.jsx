import React from 'react';
import axios from 'axios';

import {
  ContainerStyled,
  Heading,
  FormStyled,
  TextWrapper,
  Title,
  Input,
  ErrorMessage,
  Select,
  InputWrapper,
  Wrapper,
  OptionWhite,
  OptionBlack,
  OptionGrey,
  OptionRed,
  MessageOptional,
  SelectLong,
  Option,
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
      firstname: '',
      lastname: '',
      patronymic: '',
      phone: '',
      color_car: '',
      prepayment: '',
      credit_term: '',
      submitted: false,
      car: 'Maskvich'
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
      firstname, 
      lastname,
      patronymic,
      phone,
      color_car,
      prepayment,
      credit_term
    } = this.state;

    const payload = {
      firstname,
      lastname,
      patronymic,
      phone,
      color_car,
      prepayment,
      credit_term
    };

    axios({
      method: 'post',
      url: 'http://admin.zauto.uz/api/orders',
      data: payload,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization"
      }
    }).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error);
    })

    this.setState({ submitted: true })
    // clear form
    if (
      firstname 
      && lastname 
      && patronymic
      && phone 
      && color_car 
      && prepayment 
      && credit_term ) {
      this.setState({
        firstname: '',
        lastname: '',
        patronymic: '',
        phone: '',
        color_car: '',
        prepayment: '',
        credit_term: '',
        submitted: false
      })
      console.log(this.state);
    }
  }

  render() {
    const {
      firstname, 
      lastname, 
      patronymic,
      phone,
      color_car,
      prepayment, 
      credit_term,
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
            name="firstname"
            placeholder="Имя"
            value={firstname}
            onChange={this.handleChange}
          />
          { 
            submitted && !firstname &&
            <ErrorMessage>Имя отсутствует!</ErrorMessage>
          }
          {
            firstname !== '' && firstname.length < 3 ?
            <ErrorMessage>Имя должно быть более 3 символов!</ErrorMessage>
            : null
          }

          <Input
            type="text"
            name="lastname"
            placeholder="Фамилия"
            value={lastname}
            onChange={this.handleChange}
          />
          { 
            submitted && !lastname && 
            <ErrorMessage>Фамилия отсутствует!</ErrorMessage>
          }
          {
            lastname !== '' && lastname.length < 3 ? 
            <ErrorMessage>Фамилия должна быть более 5 символов!</ErrorMessage>
            : null
          }
          <Input
            type="text"
            name="patronymic"
            placeholder="Отчество"
            value={patronymic}
            onChange={this.handleChange}
          />
          { 
            submitted && !patronymic && 
            <ErrorMessage>Отчество отсутствует!</ErrorMessage>
          }
          {
            patronymic !== '' && patronymic.length < 3 ? 
            <ErrorMessage>Отчество должна быть более 5 символов!</ErrorMessage>
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
          <InputWrapper>
            <Wrapper>
              <Select value={color_car} onChange={this.handleChange} name="color_car" id="color_car">
                <OptionWhite>Цвет авто</OptionWhite>
                <OptionBlack value="Black">Black</OptionBlack>
                <OptionRed value="Red">Red</OptionRed>
                <OptionWhite value="White">White</OptionWhite>
                <OptionGrey value="Grey">Grey</OptionGrey>
              </Select>
              { 
                submitted && !color_car &&
                <ErrorMessage>Выберите цвет!</ErrorMessage>
              }
            </Wrapper>
            <Wrapper>
              <Select value={prepayment} onChange={this.handleChange} name="prepayment" id="prepayment">
                <Option>предоплата</Option>
                <Option value="35%">35%</Option>
                <Option value="50%">50%</Option>
              </Select>
              { 
                submitted && !prepayment &&
                <ErrorMessage>Выберите предоплату!</ErrorMessage>
              }
            </Wrapper>
          </InputWrapper>
          <SelectLong value={credit_term} onChange={this.handleChange} name="credit_term" id="credit_term">
              <Option>Условия кредита</Option>
              <Option value="12">12</Option>
              <Option value="24">24</Option>
              <Option value="36">36</Option>
            </SelectLong>
            { 
              submitted && !credit_term &&
              <ErrorMessage>Выберите срок кредитования!</ErrorMessage>
            }
            <InputWrapper>
              <Checkbox type="checkbox" id="terms" name="terms" />
              <LinkToPolicy to='/policy'>Agree to all terms</LinkToPolicy>            
            </InputWrapper>
          <ButtonWrapper>
            <ButtonPrimary orderBtn>Отправить</ButtonPrimary>
          </ButtonWrapper>
        </FormStyled>
      </ContainerStyled>
    );
  };
};

export default Form;
