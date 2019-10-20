import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import find from 'lodash/find';

import { Block } from '../../css-in-js/blocks';
import { StyledMenu, StyledMenuItems } from '../../css-in-js/dropdown';
import { IProps } from './DropdownContainer';

export interface IItem {
  title: string;
  url: string;
  active: boolean;
}

const Dropdown: FC<IProps> = ({
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
      center
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

export default Dropdown;
