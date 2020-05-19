import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './App.styles';

import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';
import NavbarMain from './containers/Navbar';

const Homepage = lazy(() => import('./pages/Homepage'));
const DescriptionPage = lazy(() => import('./pages/DescriptionPage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const FormPage = lazy(() => import('./pages/FormPage'));

const App = () => {
  return (
    <Container>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <NavbarMain />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/description' component={DescriptionPage} />
            <Route exact path='/calculator' component={CalculatorPage} />
            <Route exact path='/form' component={FormPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Container>
  )
};

export default App;
