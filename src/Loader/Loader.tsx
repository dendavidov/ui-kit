import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './Loader.styles';

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export { Loader };
