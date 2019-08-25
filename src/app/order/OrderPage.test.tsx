import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Router } from 'react-router';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import { OrderPage } from 'src/orders/OrderPage';
import * as AppContext from 'src/core/AppContext';
import { history } from 'src/core/App';
import { OrderStatus } from 'src/core/models/Order';
import { Box } from 'src/core/styled/blocks';
import { DD } from 'src/core/styled/typography';

const contextValue = {
  dispatch: jest.fn(),
};

jest.spyOn(AppContext, 'useAppContext').mockImplementation(() => contextValue);

it('Correctly snapshot', () => {
  const component = renderer.create(
    <Router history={history}>
      <OrderPage history={history} match={{} as any} location={{} as any} />
    </Router>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('Correcly render', (done) => {
  const response = {
    data: {
      customer: 'shallow',
      orderList: ['A', 'B'],
      orderNumber: 1,
      price: 100,
      status: OrderStatus.Preparing,
    },
  };

  const id = '1';
  const match: any = { params: { id } };
  const mock = new MockAdapter(axios);

  mock.onGet(`/api/orders/${id}`).reply(200, response.data);
  const component = <OrderPage history={history} match={match} location={{} as any} />;
  const tree = mount(<Router history={history}>{component}</Router>);

  setImmediate(() => {
    tree.update();

    expect(tree.find('span')).toHaveLength(2);
    expect(
      tree
        .find(Box)
        .at(1)
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
    done();
  });
});
