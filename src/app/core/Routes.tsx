import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import OrderPage from '../orders/OrderPage';
import OrdersPage from '../orders/OrdersPage';
import Layout from './layout/Layout';

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={OrdersPage} />
      <Route exact path="/orders" component={OrdersPage} />
      <Route exact path="/orders/:id" component={OrderPage} />
      <Route exact path="/profile" component={OrderPage} />

      <Redirect to="/" />
    </Switch>
  </Layout>
);

export default Routes;
