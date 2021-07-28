import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  listItem: {
    "&,&:focus": {
      backgroundColor: theme.palette.background.paper
    }
  },

  listItemDone: {
    "&,&:focus": {
      backgroundColor: "#cc0000",
      color: "white"
    },
  },

}));