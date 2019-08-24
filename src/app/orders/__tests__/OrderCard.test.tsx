import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Router } from 'react-router';

import { Order, OrderStatus } from 'src/core/models/Order';
import { OrderCard } from 'src/orders/OrderCard';
import { history } from 'src/core/App';
import { Box } from 'src/core/styled/blocks';
import { DD } from 'src/core/styled/typography';

it('Correctly snapshot', () => {
  const component = renderer.create(
    <Router history={history}>
      <OrderCard
        order={
          new Order({
            customer: 'Stub',
            orderList: [],
            orderNumber: 1,
            price: 1,
            status: OrderStatus.Preparing,
          })
        }
      />
    </Router>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('Correctly render OrderCard order list with two items', () => {
  const tree = shallow(
    <OrderCard
      order={
        new Order({
          customer: 'shallow',
          orderList: ['A', 'B'],
          orderNumber: 1,
          price: 100,
          status: OrderStatus.Preparing,
        })
      }
    />,
  );

  expect(tree.find('span')).toHaveLength(2);
  expect(
    tree
      .find(Box)
      .at(0)
      .text(),
  ).toMatch(OrderStatus.Preparing);
  expect(
    tree
      .find(DD)
      .at(0)
      .text(),
  ).toMatch('1');
  expect(
    tree
      .find(DD)
      .at(1)
      .text(),
  ).toMatch('shallow');
  expect(
    tree
      .find(DD)
      .at(2)
      .text(),
  ).toMatch('100');
});
