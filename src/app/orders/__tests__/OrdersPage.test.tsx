import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { OrdersPage } from 'src/orders/OrdersPage';
import { OrderStatus } from 'src/core/models/Order';
import { OrderCard } from '../OrderCard';

it('Correctly snapshot', () => {
  const component = renderer.create(<OrdersPage />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('Correcly render and change location when orderCard clicked', (done) => {
  const response = {
    data: [
      {
        customer: 'Erjan',
        orderList: ['A', 'B'],
        orderNumber: 1,
        price: 100,
        status: OrderStatus.Preparing,
      },
      {
        customer: 'Test',
        orderList: ['C', 'D', 'E'],
        orderNumber: 2,
        price: 300,
        status: OrderStatus.Done,
      },
    ],
  };

  const mock = new MockAdapter(axios);

  mock.onGet('/api/orders').reply(200, response.data);

  const tree = mount(
    <MemoryRouter initialEntries={['/orders']}>
      <Switch>
        <Route exact path="/orders" component={OrdersPage} />
        <Route exact path="/orders/:id" component={() => <div className="mock">Mock</div>} />
      </Switch>
    </MemoryRouter>,
  );

  setImmediate(() => {
    tree.update();

    expect(tree.find(OrderCard)).toHaveLength(2);
    tree
      .find(Link)
      .at(0)
      .simulate('click', { button: 0 });
    expect(tree.find('.mock').text()).toMatch('Mock');

    done();
  });
});
