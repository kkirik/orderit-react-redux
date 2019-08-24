import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Router } from 'react-router';
import { expect } from 'chai';

import { User } from 'src/core/models/Profile';
import { Order, OrderStatus } from 'src/core/models/Order';
import { OrderCard } from 'src/orders/OrderCard';
import * as AppContext from 'src/core/AppContext';
import { history } from 'src/core/App';
import { ProfilePage } from './ProfilePage';

const orderList = [
  new Order({
    customer: 'Stub',
    orderList: [],
    orderNumber: 1,
    price: 1,
    status: OrderStatus.Preparing,
  }),
];
const contextValue = {
  store: {
    user: new User({
      orderList,
      balance: 100,
      firstname: 'string',
      lastname: 'string',
    }),
  },
};

jest.spyOn(AppContext, 'useAppContext').mockImplementation(() => contextValue);

describe('Testing ProfilePage', () => {
  it('Correctly snapshot', () => {
    const component = renderer.create(
      <Router history={history}>
        <ProfilePage />
      </Router>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Correcly render', () => {
    const tree = shallow(<ProfilePage />);

    expect(tree.find(OrderCard)).have.length(1);
    // expect(tree.find(OrderCard)).toHaveLength(1);
  });
});
