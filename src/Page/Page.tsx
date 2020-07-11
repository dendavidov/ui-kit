import * as React from 'react';
import { useStyles } from './Page.styles';
import { IProps } from './Page.types';

const Page = (props: IProps) => {
  const { children, header } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>{header}</header>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export { Page };
