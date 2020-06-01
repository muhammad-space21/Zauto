import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import { Container } from './App.styles';

import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';

const Homepage = lazy(() => import('./pages/Homepage'));
// const ProductPage = lazy(() => import('./pages/ProductPage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const FormPage = lazy(() => import('./pages/FormPage'));
const ProductComponent = lazy(() => import('./containers/ProductComponent'));
const MenuItems = lazy(() => import('./containers/MenuItems'));
const MenuCars = lazy(() => import('./containers/MenuCars'));

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allCars: []
    }
  }


  componentDidMount() {
    axios.get('https://admin.zauto.uz/api/cars')
      .then(res => {
        console.log(res);
        this.setState({
          allCars: res.data
        })
      })
  };

  render() {
    return (
      <Container>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/calculator' component={CalculatorPage} />
              <Route exact path='/form' component={FormPage} />
              <Route path='/' component={MenuItems}>
                <Route path='/:sluggable' component={ProductComponent} />
              </Route>
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </Container>
    )
  }
};

export default App;
