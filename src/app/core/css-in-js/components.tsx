import React, { FC } from 'react';
import withStyles, { WithStyles } from 'react-jss';
import { Link } from 'react-router-dom';

import arrow from '../../../public/icons/left-arrow-back.png';

interface IArrowProps {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

const arrowProps = {
  arrow: {
    background: `url(${arrow}) no-repeat`,
    backgroundSize: 'cover',
    position: 'absolute',
    width: '50px',
    height: '50px',
    top: ({ top }: IArrowProps) => top,
    left: ({ left }: IArrowProps) => left,
    right: ({ right }: IArrowProps) => right,
    bottom: ({ bottom }: IArrowProps) => bottom,
    '&:before': {
      content: '',
      border: '2px solid green',
      borderRadius: '50%',
      position: 'absolute',
      top: -'11px',
      left: -'7px',
      width: '70px',
      height: '70px',
    },
  },
};

type LinkProps = { to?: string };
type ArrowProps = WithStyles<typeof arrowProps> & IArrowProps & LinkProps;

const Arrow: FC<ArrowProps> = ({ children, classes, to }) => (
  <Link to={to} className={classes.arrow}>
    {children}
  </Link>
);

export const LeftArrow = withStyles({ ...arrowProps })(Arrow);
