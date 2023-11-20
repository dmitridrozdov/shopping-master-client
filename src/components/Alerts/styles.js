import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    product: {
        fontFamily: 'Arvo', 
        fontSize: '12px',
    },

    priceNormal: {
        fontFamily: 'Montserrat', 
        fontSize: '11px',
    },

    priceContainer: {
        marginTop: theme.spacing(1),
    },

}));