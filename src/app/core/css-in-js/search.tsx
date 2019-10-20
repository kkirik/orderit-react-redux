import React, { FC } from 'react';
import withStyles, { WithStyles } from 'react-jss';

const inputProps = {
  input: {
    width: '100%',
    height: '30px',
    fontSize: '15px',
    boxSizing: 'border-box',
    '&:focus': {
      outline: 'none',
    },
  },
};

type InputProps = WithStyles<typeof inputProps> &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputComponent: FC<InputProps> = ({ classes, ...props }) => (
  <input className={classes.input} {...props} />
);

export const Input = withStyles({ ...inputProps })(InputComponent);

const searchButtonProps = {
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '30px',

    '&:hover': {
      background: 'rgba(0, 0, 0, 0.1)',
      transition: '0.6s ease',
      cursor: 'pointer',
    },
    '&:focus': {
      outline: 'none',
    },
  },
};

type SearchButtonProps = WithStyles<typeof searchButtonProps> &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const SearchButtonComponent: FC<SearchButtonProps> = ({
  children,
  classes,
  type = 'button',
  ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={classes.button} {...props}>
    {children}
  </button>
);

export const SearchButton = withStyles({ ...searchButtonProps })(SearchButtonComponent);
