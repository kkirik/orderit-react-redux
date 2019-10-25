import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { Search } from './Search';
import { Input } from '../../css-in-js/search';

const onChangeFn = sinon.fake();
const getItemFn = sinon.fake();
const setItemFn = sinon.fake();
const eventMock = { preventDefault: sinon.fake() };
const mock = {
  getItem: getItemFn,
  setItem: setItemFn,
};

Object.defineProperty(global, 'localStorage', {
  value: mock,
});

afterEach(() => {
  sinon.reset();
});

describe('Search', () => {
  it('Изменение значения input при onChange', () => {
    const component = <Search onChange={onChangeFn} />;
    const tree = shallow(component);
    const fakeValue = '11';

    expect(getItemFn.callCount).to.be.equal(1);
    tree.find(Input).simulate('change', { ...eventMock, target: { value: fakeValue } });
    expect(tree.state('search')).to.equal(fakeValue);
    expect(onChangeFn.callCount).to.be.equal(0);

    tree.find('form').simulate('submit', { ...eventMock, target: { value: null } });
    expect(tree.state('search')).to.equal(fakeValue);
    expect(getItemFn.callCount).to.be.equal(2);
    expect(setItemFn.args[0][1]).to.be.equal(fakeValue);
    expect(onChangeFn.args[0][0]).to.be.equal(fakeValue);
  });

  it('Изменение значения input при onChange если передан props force = true', () => {
    const component = <Search onChange={onChangeFn} force />;
    const tree = shallow(component);
    const fakeValue = '1';

    expect(getItemFn.callCount).to.be.equal(1);
    tree.find(Input).simulate('change', { ...eventMock, target: { value: fakeValue } });
    expect(tree.state('search')).to.equal(fakeValue);
    expect(getItemFn.callCount).to.be.equal(2);
    expect(onChangeFn.callCount).to.be.equal(1);
    expect(onChangeFn.args[0][0]).to.be.equal(fakeValue);

    tree.find('form').simulate('submit', { ...eventMock, target: { value: null } });
    expect(tree.state('search')).to.equal(fakeValue);
    expect(getItemFn.callCount).to.be.equal(3);
    expect(setItemFn.calledOnce).to.be.false;
    expect(onChangeFn.calledOnce).to.be.false;
  });

  it('Отправка формы при state = { search: 333 }', () => {
    const component = <Search onChange={onChangeFn} force />;
    const tree = shallow(component);
    const fakeValue = '333';

    tree.setState({ search: fakeValue });
    expect(tree.state('search')).to.equal(fakeValue);

    tree.find('form').simulate('submit', { ...eventMock, target: { value: null } });
    expect(setItemFn.calledOnce).to.be.true;
    expect(onChangeFn.calledOnce).to.be.true;
    expect(onChangeFn.args[0][0]).to.be.equal(fakeValue);
  });
});
