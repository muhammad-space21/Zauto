import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './App.styles';

import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';

const Homepage = lazy(() => import('./pages/Homepage'));
const DescriptionPage = lazy(() => import('./pages/DescriptionPage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const FormPage = lazy(() => import('./pages/FormPage'));
const CarsCatalogPage = lazy(() => import('./pages/CarsCatalogPage'));


const App = () => {

  return (
    <Container>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />
            <Route path='/product' component={DescriptionPage} />
            <Route exact path='/calculator' component={CalculatorPage} />
            <Route exact path='/form' component={FormPage} />
            <Route exact path='/catalog' component={CarsCatalogPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Container>
  )
};

export default App;
