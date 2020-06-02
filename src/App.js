import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './App.styles';

import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollTop from './hooks/useScrollToTop';

const Homepage = lazy(() => import('./pages/Homepage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const FormPage = lazy(() => import('./pages/FormPage'));
const ProductComponent = lazy(() => import('./pages/ProductPage'));


class App extends React.Component {
  render() {
    return (
      <Container>
        <ScrollTop>
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Route exact key='r-1' path='/' component={Homepage} />
                <Route exact key='r-2' path='/:id' component={ProductComponent} />
                <Route exact key='r-3' path='/calculator' component={CalculatorPage} />
                <Route exact key='r-4' path='/form' component={FormPage} />
              </Suspense>
            </ErrorBoundary>
          </Switch>
        </ScrollTop>
      </Container>
    )
  }
};

export default App;
