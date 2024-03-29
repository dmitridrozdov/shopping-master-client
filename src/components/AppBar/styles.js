import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: 'none',
        border: '1px',
    },

    headerTextStyle: {
        fontFamily: 'Arvo',
        fontSize: '14px',
    },

}));