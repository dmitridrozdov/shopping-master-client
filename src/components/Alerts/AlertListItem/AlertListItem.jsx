import React from 'react'
import { ListItem, ListItemText, Typography } from '@material-ui/core'
import useStyles from './styles'

const AlertListItem = ({ id, product, price }) => {
    const classes = useStyles()

    return (
        <ListItem divider={true} className={classes.listItem}>
            <ListItemText
                disableTypography
                primary={ 
                    <>
                        <div className={classes.overlay2}>
                            <Typography type="body2" style={{ fontFamily: 'Montserrat', fontSize: '10px', cursor: 'pointer' }}>{price}</Typography>
                        </div>
                        <Typography type="body2" style={{ fontFamily: 'Montserrat', fontSize: '10px', cursor: 'pointer' }}>{product}</Typography> 
                    </>
                }
            />
        </ListItem>
    )
}

export default AlertListItem