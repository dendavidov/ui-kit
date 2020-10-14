import { makeStyles } from '@material-ui/core/styles';

const breakpointTablet = 768;

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#555555',
    zIndex: 1029,
    padding: '10px 15px',
    boxShadow: 'none',
    transition: 'all 150ms ease',
    minHeight: 50,
    borderWidth: 0,
    marginBottom: 0,
    borderRadius: 3,
    backgroundColor: 'transparent',
  },
  content: {
    padding: '10px 15px',
    overflow: 'auto',
    display: 'flex',
    flex: 1,
  },
  [`@media screen and (max-width: ${breakpointTablet}px)`]: {
    header: {
      marginLeft: 70,
    },
  },
}));

export { useStyles };
