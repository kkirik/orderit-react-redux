import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Input } from 'src/core/styled/form';
import { Search } from '../search/Search';

it('Correctly render', () => {
  const component = renderer.create(<Search onSubmit={null} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should call funtion when search submit', () => {
  const mockFn = jest.fn();
  const eventMock = { preventDefault: jest.fn() };
  const component = <Search onSubmit={mockFn} />;
  const tree = mount(component);

  tree.find('form').simulate('submit', eventMock);

  expect(mockFn).toHaveBeenCalled();
});

it('should call funtion when input change', () => {
  const mockFn = jest.fn();
  const eventMock = { preventDefault: jest.fn() };
  const component = <Search onSubmit={mockFn} force />;
  const tree = mount(component);

  tree.find(Input).simulate('change', eventMock);
  tree.find(Input).simulate('change', eventMock);

  expect(mockFn).toBeCalledTimes(2);
});
