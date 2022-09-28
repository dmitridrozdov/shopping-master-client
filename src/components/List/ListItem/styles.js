import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  // listItem: {
  //   "&,&:focus": {
  //     backgroundColor: theme.palette.background.paper
  //   }
  // },

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
    fontSize: '10px',
    color: '#858585',
   },

}));