import { withStyles } from '@material-ui/core/styles';

const styles = withStyles(() => ({
  root: {
    '& tr': {
      height: 48,
    },
    '& td': {
      padding: '4px 56px 4px 24px',
    },
  },
}));

export { styles as withStyles };
