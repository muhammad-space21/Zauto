import React from 'react';

import {
  ContainerStyled,
  Heading,
  FormStyled,
  Input,
  ErrorMsg,
  ButtonWrapper,
  Checkbox,
  LinkToPolicy,
  InputTel,
  Wrapper,
  Error,
  AlertStyled
} from './styles';

import useForm from '../../hooks/useForm';
import SpinnerSmall from '../../components/SpinnerSmall';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';

const Form = () => {
  const { 
    handleSubmit,
    handleChange,
    inputs,
    submit,
    error,
    loading,
    success,
    instruction
  } = useForm();

    return (
    <>
      <ContainerStyled>
        <FormStyled onSubmit={handleSubmit}>
          { instruction && 
            (<AlertStyled variant='info'>
              Пожалуйста, заполните обязательные поля!
            </AlertStyled>)
          }
          { success && 
            (<AlertStyled variant='success'>
              Заявка принята!
            </AlertStyled>)
          }
          { error &&
            (<AlertStyled variant="danger">
              Упс! Что-то пошло не так!
            </AlertStyled>)
          }
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
            <ErrorMsg>
              <Error>Ф. И. О отсутствует!</Error>  
            </ErrorMsg>
          }
          { submit && inputs.fullname !== '' && inputs.fullname.length < 10 ?
            (
              <ErrorMsg>
                <Error>Полное имя должно быть не менее 10 символов!</Error>
              </ErrorMsg>
            ) : null
          }
          <InputTel
            type="tel"
            name="phone"
            placeholder="(998) 90 123-45-67"
            value={inputs.phone}
            mask={['(',/[9]/, /[9]/, /[8]/, ')', ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, ]}
            guide={true}
            showMask={true}
            onChange={handleChange}
          />
          {
            submit && !inputs.phone &&
            <ErrorMsg>
              <Error>Номер телефона отсутствует!</Error>
            </ErrorMsg>
          }
          <Wrapper>
            <Checkbox type="checkbox" id="terms" name="terms" />
            <LinkToPolicy to='/policy'>Agree to all terms</LinkToPolicy>            
          </Wrapper>
          <ButtonWrapper>
            <ButtonPrimary orderBtn>
              { loading ? (<SpinnerSmall />) : ('Отправить')}
            </ButtonPrimary>
          </ButtonWrapper>
        </FormStyled>
      </ContainerStyled>
      </>
    );
};

export default Form;