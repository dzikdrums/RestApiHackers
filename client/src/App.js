import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home/HomePage';
import MainLayout from './components/layout/MainLayout/MainLayout';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Order from './components/pages/Order/OrderPage.js';
import Prices from './components/pages/Prices/PricesPage';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/prices" component={Prices} />
            <Route exact path="/order-a-ticket" component={Order} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
