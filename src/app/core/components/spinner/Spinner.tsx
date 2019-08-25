import React from 'react';
import withStyles from 'react-jss';

const Spinner = withStyles({
  '@keyframes rotation': {
    from: {
      transform: 'rotate(0deg)',
    },

    to: {
      transform: 'rotate(360deg)',
    },
  },
  spinner: {
    width: '30px',
    height: '30px',
    border: '3px solid green',
    borderRadius: '50%',
    borderLeftColor: 'transparent',
    animation: `0.8s $rotation infinite linear`,
    position: 'fixed',
    margin: 'auto',
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
  },
})(({ classes }) => <div className={classes.spinner} />);

export default Spinner;
