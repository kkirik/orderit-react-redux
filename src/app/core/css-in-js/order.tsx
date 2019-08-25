import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'react-jss';

import { Block, IBlockProps, blockStyles } from './blocks';

export const StyledOrderCard: FC<IBlockProps> = withStyles({
  menu: {
    transition: '0.2s ease-in',
    cursor: 'pointer',
    a: {
      color: '#333',
      textDecoration: 'none',
    },
    '&:hover': {
      boxShadow: '0 0 50px 0 rgba(0, 0, 0, 0.4)',
    },
    ...blockStyles,
  },
})(({ children, classes, ...props }) => {
  return (
    <Block className={classes.menu} {...props} boxshadow="0 0 50px 0 rgba(0, 0, 0, 0.15)">
      {children}
    </Block>
  );
});

export const StyledMenu = withStyles({
  menu: {
    borderRight: '1px solid green',
    borderLeft: '1px solid green',
    height: '100 %',
    display: 'grid',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#333',
  },
})(({ children, classes, to }) => (
  <Link to={to} className={classes.menu}>
    {children}
  </Link>
));
