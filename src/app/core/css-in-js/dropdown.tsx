import React from 'react';
import withStyles from 'react-jss';

export const StyledMenu = withStyles({
  menu: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 0 5px lightgray',
  },
})(({ children, classes }) => <ul className={classes.menu}>{children}</ul>);

export const StyledMenuItems = withStyles({
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
})(({ children, classes }) => <li className={classes.item}>{children}</li>);
