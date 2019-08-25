import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import find from 'lodash/find';

import { Block } from '../../css-in-js/blocks';
import { StyledMenu, StyledMenuItems } from '../../css-in-js/dropdown';

export interface IItem {
  title: string;
  url: string;
  active: boolean;
}


export interface IDropdownProps {
  items: IItem[];
  openMenu?: boolean;
  activeElement?: IItem;
  setOpenMenu?: (state: boolean) => void;
  setActiveElement?: (element: IItem) => void;
}

const Dropdown: FC<IDropdownProps> = ({
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

export default Dropdown;
