import React from 'react';

import { Container, Component } from './styles';

import Image404  from '../../assets/images/404.jpg';
class ErrorBoundary extends React.Component {
  constructor() {
      super();

      this.state = {
          hasError: false
      }
  }

  static getDerivedStateFromError(error) {
      // process the error
      return {
        hasError: true
      }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.hasError) {
      return (
        <Container>
          <Component>
            <img src={Image404} alt=""/>
            <span>This page is Broken :/</span>
          </Component>
        </Container>
      )
    }
    return this.props.children;
  }
};

export default ErrorBoundary;