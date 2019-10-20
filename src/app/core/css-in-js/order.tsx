import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import withStyles, { WithStyles } from 'react-jss';

import { blockStyles, IBlockProps } from './blocks';

const cardProps = {
  card: {
    transition: '0.2s ease-in',
    cursor: 'pointer',
    boxshadow: '0 0 50px 0 rgba(0, 0, 0, 0.15)',
    a: {
      color: '#333',
      textDecoration: 'none',
    },
    '&:hover': {
      boxShadow: '0 0 50px 0 rgba(0, 0, 0, 0.4)',
    },
    ...blockStyles,
  },
};

type CardProps = WithStyles<typeof cardProps> & IBlockProps;

const OrderCardComponent: FC<CardProps> = ({ children, classes }) => (
  <div className={classes.card}>{children}</div>
);

export const StyledOrderCard = withStyles({ ...cardProps })(OrderCardComponent);

const linkProps = {
  link: {
    borderRight: '1px solid green',
    borderLeft: '1px solid green',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textDecoration: 'none',
    color: '#333',
  },
};

type LinkProps = WithStyles<typeof linkProps> & { to: string };

const ChoisenLinkComponent: FC<LinkProps> = ({ children, classes, to }) => (
  <Link to={to} className={classes.link}>
    {children}
  </Link>
);

export const ChoisenLink = withStyles({ ...linkProps })(ChoisenLinkComponent);
