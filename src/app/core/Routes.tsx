import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import OrderPage from '../order/OrderPageContainer';
import OrdersPage from '../orders/OrdersPageContainer';
import ProfilePage from '../profile/ProfilePageContainer';
import Layout from './layout/Layout';
import { IRootState } from './reducers/reducer';
import { Order } from './models/Order';

const Routes: FC<IStateToProps> = ({ order }) => (
  <Layout orderId={order.orderNumber}>
    <Switch>
      <Route exact path="/" component={OrdersPage} />
      <Route exact path="/orders" component={OrdersPage} />
      <Route exact path="/orders/:id" component={OrderPage} />
      <Route exact path="/profile" component={ProfilePage} />

      <Redirect to="/" />
    </Switch>
  </Layout>
);

interface IStateToProps {
  order: Order;
}

const mapStateToProps = (state: IRootState) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Routes);
