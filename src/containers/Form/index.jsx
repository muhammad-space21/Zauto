import React from 'react';

import {
  StyledSignUpPage,
  Heading,
  FormStyled,
  TextWrapper,
  Title,
  Input,
  ErrorMessage,
  Container
} from './styles';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      phone: '',
      id_zmarket: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name, 
      surname, 
      phone, 
      id_zmarket
    } = this.state;
    this.setState({ submitted: true })
    // clear form
    if (name && surname && phone && id_zmarket) {
      this.setState({
        name: '',
        surname: '',
        phone: '',
        id_zmarket: '',
        submitted: false
      })
      console.log(this.state);
    }
  }

  render() {
    const {
      name, 
      surname, 
      phone, 
      id_zmarket, 
      submitted
    } = this.state;
    return (
      <StyledSignUpPage>
        <FormStyled onSubmit={this.handleSubmit}>
          <TextWrapper>
            <Heading>Some Headline</Heading>
            <Title>Some Title goes here</Title>
          </TextWrapper>

          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
          { 
            submitted && !name &&
            <ErrorMessage>Name is missing!</ErrorMessage>
          }
          {
            name !== '' && name.length < 3 ?
            <ErrorMessage>Name must be more than 2 characters</ErrorMessage>
            : null
          }

          <Input
            type="text"
            name="surname"
            placeholder="Surname"
            value={surname}
            onChange={this.handleChange}
          />
          { 
            submitted && !surname && 
            <ErrorMessage>Surname is missing!</ErrorMessage>
          }
          {
            surname !== '' && surname.length < 3 ? 
            <ErrorMessage>Surname must be more than 2 characters</ErrorMessage>
            : null
          }
          <Input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={phone}
            onChange={this.handleChange}
          />
          { 
            submitted && !phone &&
            <ErrorMessage>Name is missing!</ErrorMessage>
          }
          <Input
            type="text"
            name="id_zmarket"
            placeholder="Id zmarket"
            value={id_zmarket}
            onChange={this.handleChange}
          />
          { 
            submitted && !id_zmarket && 
            <ErrorMessage>Password is missing!</ErrorMessage>
          }
          {
            id_zmarket !== '' && id_zmarket.length < 6 ? 
            <ErrorMessage>Id Zmarket must be more than 6 characters</ErrorMessage>
            : null
          }
          <Container>
            <ButtonPrimary orderBtn>Submit</ButtonPrimary>
          </Container>
        </FormStyled>
      </StyledSignUpPage>
    );
  }
}

export default Form;
