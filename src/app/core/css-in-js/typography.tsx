import React from 'react';
import withStyles from 'react-jss';

export const DD = withStyles({
  dd: {
    fontSize: '15px',
    margin: 0,
  }
})(({ children, classes }) => <dd className={classes.dd}>{children}</dd>);

export const DT = withStyles({
  dt: {
    color: 'grey',
    marginBottom: '5px',
    fontSize: '12px',
  }
})(({ children, classes }) => <dt className={classes.dt}>{children}</dt>);

export const H1 = withStyles({
  h1: {
    fontSize: '30px',
    fontFamily: 'Peenu',
    fontWeight: 200,
  }
})(({ children, classes }) => <h1 className={classes.h1}>{children}</h1>);

export const Logo = withStyles({
  logo: {
    color: 'green',
    fontSize: '30px',
    lineHeight: '60px',
  }
})(({ children, classes }) => <div className={classes.logo}>{children}</div>);

