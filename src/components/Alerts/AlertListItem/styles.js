import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  listItem: {
    "&,&:focus": {
      backgroundColor: theme.palette.background.paper
    }
  },

  overlay1: {
    position: 'absolute',
    top: '10px',
    right: '40px',
    color: 'black',
  },

  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'black',
  },

  priceNormal: {
    fontFamily: 'Montserrat', 
    fontSize: '11px',
  },

  priceLower: {
    fontFamily: 'Montserrat', 
    fontSize: '11px',
    color: 'green',
  },

}))