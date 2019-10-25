import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Dropdown, { IItem } from './Dropdown';
import { StyledMenu, StyledMenuItems } from '../../css-in-js/dropdown';
import { Block } from '../../css-in-js/blocks';

const dropdownItems: IItem[] = [
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

const setOpenMenuFn = sinon.fake();
const setActiveElementFn = sinon.fake();

afterEach(() => {
  sinon.reset();
});

describe('Тестирование Dropdown', () => {
  it('Меню закрыто и нет активного элемента', () => {
    const component = (
      <Dropdown
        items={dropdownItems}
        openMenu={false}
        setOpenMenu={setOpenMenuFn}
        setActiveElement={setActiveElementFn}
      />
    );
    const tree = shallow(component);

    expect(tree.find(StyledMenu).exists()).to.be.not.ok;
    expect(tree.find('.active-element').exists()).to.be.false;
    expect(setOpenMenuFn.callCount).to.be.equal(0);
    expect(setActiveElementFn.callCount).to.be.equal(0);
  });

  it('Есть активный элемент', () => {
    const component = (
      <Dropdown
        items={dropdownItems}
        openMenu={false}
        activeElement={dropdownItems[0]}
        setOpenMenu={setOpenMenuFn}
        setActiveElement={setActiveElementFn}
      />
    );
    const tree = shallow(component);

    expect(tree.find('.active-element').exists()).to.be.ok;
  });

  it('Открытие меню', () => {
    const component = (
      <Dropdown
        items={dropdownItems}
        openMenu={false}
        setOpenMenu={setOpenMenuFn}
        setActiveElement={setActiveElementFn}
      />
    );
    const tree = shallow(component);

    tree.find(Block).simulate('click');
    expect(setOpenMenuFn.callCount).to.be.equal(1);
    expect(setOpenMenuFn.args[0][0]).to.be.true;
  });

  it('Cмена активного элемента', () => {
    const component = (
      <Dropdown
        openMenu
        items={dropdownItems}
        setOpenMenu={setOpenMenuFn}
        setActiveElement={setActiveElementFn}
      />
    );
    const tree = shallow(component);

    tree
      .find(StyledMenuItems)
      .at(1)
      .simulate('click', { target: { textContent: 'Logout' } });
    expect(setActiveElementFn.callCount).to.be.equal(1);
    expect(setActiveElementFn.args[0][0]).to.be.equal(dropdownItems[1]);
    expect(setOpenMenuFn.args[0][0]).to.be.false;
  });
});
