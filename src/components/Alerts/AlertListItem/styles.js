import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  listItem: {
    "&,&:focus": {
      backgroundColor: theme.palette.background.paper
    }
  },

  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'black',
  },

}));