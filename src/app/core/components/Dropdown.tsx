import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import map from 'lodash/map';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

import { Block } from '../css-in-js/blocks';
import { StyledMenu, StyledMenuItems } from '../css-in-js/dropdown';
import { setActiveElementMenu, setStateOpenMenu } from './actionCreators';

export interface IItem {
  title: string;
  url: string;
  active: boolean;
}

interface IState {
  openMenu: boolean;
  activeElement: IItem;
}

interface IProps {
  items: IItem[];
  openMenu?: boolean;
  activeElement?: IItem;
  setOpenMenu?: (state: boolean) => void;
  setActiveElement?: (element: IItem) => void;
}

const Dropdown0: FC<IProps> = ({
  items,
  openMenu,
  activeElement,
  setOpenMenu,
  setActiveElement,
}) => {
  function setNewItem(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const { target } = e as any;
    const activeItem = find(items, ['title', target.textContent]);
    setActiveElement(activeItem);
    setOpenMenu(false);
  }

  return (
    <Block
      center="true"
      width="100%"
      height="60px"
      cursor="pointer"
      background="#fff"
      position="relative"
      onClick={() => setOpenMenu(!openMenu)}
    >
      <div>{activeElement && activeElement.title}</div>
      {openMenu && (
        <StyledMenu>
          {map(items, (item) => (
            <Link to={item.url} key={item.title}>
              <StyledMenuItems onClick={setNewItem}>{item.title}</StyledMenuItems>
            </Link>
          ))}
        </StyledMenu>
      )}
    </Block>
  );
};

const mapStateToProps = (state: IState, ownProps: IProps) => {
  const defaultActiveElement = find(ownProps.items, ['active', true]);
  const activeElement = isEmpty(state.activeElement) ? defaultActiveElement : state.activeElement;

  return {
    activeElement,
    openMenu: state.openMenu,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveElement: (element: IItem) => dispatch(setActiveElementMenu(element)),
  setOpenMenu: (state: boolean) => dispatch(setStateOpenMenu(state)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dropdown0);
