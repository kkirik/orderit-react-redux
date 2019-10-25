import React, { FC } from 'react';
import withStyles, { WithStyles } from 'react-jss';

export const StyledMenu = withStyles({
  menu: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 0 5px lightgray',
  },
})(({ children, classes }) => <ul className={classes.menu}>{children}</ul>);

const menuItemsProps = {
  item: {
    borderBottom: '1px solid lightgray',
    cursor: 'pointer',
    height: '60px',
    width: '100%',
    fontSize: '15px',
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: 'lightskyblue',
      transition: '0.2s ease-in',
    },
  },
};

interface IMenuItemsProps {
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

type MenuItemsProps = WithStyles<typeof menuItemsProps> & IMenuItemsProps;

const MenuItems: FC<MenuItemsProps> = ({ children, classes, onClick }) => (
  <li className={classes.item} onClick={onClick}>
    {children}
  </li>
);

export const StyledMenuItems = withStyles({ ...menuItemsProps })(MenuItems);
