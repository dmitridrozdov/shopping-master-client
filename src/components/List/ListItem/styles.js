import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  listItemDone: {
    "&,&:focus": {
      backgroundColor: "#cc0000",
      color: "white"
    },
  },
  
  listItem: {
    "&,&:focus": {
      backgroundColor: theme.palette.background.paper
    }
  },

}));