import React from 'react';
import { Link } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, shallow } from 'enzyme';

import { Dropdown, IItem } from '../Dropdown';
import { Box } from 'src/core/styled/blocks';
import { StyledMenuItems } from 'src/core/styled/dropdown';

const dropdownMenu: IItem[] = [
  {
    active: true,
    title: 'Show Profile',
    url: '/profile',
  },
  {
    active: false,
    title: 'Logout',
    url: '/logout',
  },
];

it('Correctly render', () => {
  // Arrange
  const component = renderer.create(<Dropdown items={[]} />);
  // Act
  const tree = component.toJSON();
  // Assert
  expect(tree).toMatchSnapshot();
});

it('Correctly render (shallow)', () => {
  // Arrange
  const component = <Dropdown items={dropdownMenu} />;
  // Assert
  expect(render(component).text()).toMatch('Show Profile');
});

it('Correctly open dropdown menu', () => {
  const component = <Dropdown items={dropdownMenu} />;
  const tree = shallow(component);

  tree.find(Box).simulate('click');

  expect(tree.find(Link)).toHaveLength(2);
});

it('Correctly closed dropdown', () => {
  const component = <Dropdown items={dropdownMenu} />;
  const tree = shallow(component);

  tree.find(Box).simulate('click');
  tree
    .find(StyledMenuItems)
    .findWhere(li => li.type() === StyledMenuItems && li.text() === 'Logout')
    .simulate('click', { target: { textContent: 'Logout' } });

  expect(tree.find(Link)).toHaveLength(0);
});

it('Correctly change active element', () => {
  const component = <Dropdown items={dropdownMenu} />;
  const tree = shallow(component);

  tree.find(Box).simulate('click');
  tree
    .find(StyledMenuItems)
    .findWhere(li => li.type() === StyledMenuItems && li.text() === 'Logout')
    .simulate('click', { target: { textContent: 'Logout' } });

  expect(tree.find('div[children="Logout"]')).toHaveLength(1);
});
