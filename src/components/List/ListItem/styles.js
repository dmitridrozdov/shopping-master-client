import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  listItem: { 
    display: 'inline-block',
    padding: '5px 5px',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    cursor: 'pointer',
   },

   overlay: {
    position: 'absolute',
    top: '14px',
    right: '10px',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    color: '#858585',
  },

}));