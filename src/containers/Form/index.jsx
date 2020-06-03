import React from 'react';

import {
  ContainerStyled,
  Heading,
  FormStyled,
  Input,
  ErrorMessage,
  ButtonWrapper,
  Checkbox,
  LinkToPolicy,
  InputTel,
  Wrapper,
  Error
} from './styles';

import useForm from '../../hooks/useForm';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';


const Form = () => {
  const { 
    handleChange, 
    handleSubmit, 
    inputs, 
    submit,
    error
  } = useForm();

    return (
      <ContainerStyled>
        <FormStyled onSubmit={handleSubmit}>
          <Heading>Заполнить форму</Heading>
          <Input
            type="text"
            name="fullname"
            placeholder="Ф. И. О"
            value={inputs.fullname}
            onChange={handleChange}
          />
          { 
            submit && !inputs.fullname &&
            <ErrorMessage>
              <Error>Ф. И. О отсутствует!</Error>  
            </ErrorMessage>
          }
          {/* { error ? 
            (
              <ErrorMessage>
                <Error>Полное имя должно быть более 15 символов!</Error>
              </ErrorMessage>
            ) : null
          } */}
          <InputTel
            type="tel"
            name="phone"
            placeholder="(+998) 90 123-45-67"
            value={inputs.phone}
            onChange={handleChange}
            mask={['(',/[+]/, /[9]/, /[9]/, /[8]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, ]}
            guide={true}
            // showMask={true}
          />
          { 
            submit && !inputs.phone &&
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

export default Form;