import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  listItemDone: {
    "&,&:focus": {
      backgroundColor: "#cc0000",
      color: "white"
    },
  },

  listItem: { 
    display: 'inline-block',
    padding: '5px 5px',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    cursor: 'pointer',
    // color: '#858585',
   },

   listItemFromWoolis: { 
    display: 'inline-block',
    padding: '5px 5px',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    cursor: 'pointer',
    color: 'black',
   },

   overlay: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    color: 'black',
  },

}));