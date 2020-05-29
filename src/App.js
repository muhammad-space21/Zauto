import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './App.styles';

import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';

const Homepage = lazy(() => import('./pages/Homepage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const FormPage = lazy(() => import('./pages/FormPage'));

class App extends React.Component {

  render() {
    return (
      <Container>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={Homepage} />
              <Route path='/product/:sluggable' 
                render={({match}) => <ProductPage match={match} />}
              />
              <Route exact path='/calculator' component={CalculatorPage} />
              <Route exact path='/form' component={FormPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </Container>
    )
  }
};

export default App;
