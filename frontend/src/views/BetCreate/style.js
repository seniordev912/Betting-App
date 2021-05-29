import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  leagues: {
    marginTop: theme.spacing(4)
  },
  logo: {
    width: '100px',
    height: '100px',
    marginRight: theme.spacing(3)
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    border: '1px solid gray',
    marginBottom: theme.spacing(2),
    justifyContent: 'space-around'
  },
  title: {
    textAlign: 'right'
  },
  textarea: {
    width: '100%',
    padding: theme.spacing(1)
  }
}));

export default useStyles;
