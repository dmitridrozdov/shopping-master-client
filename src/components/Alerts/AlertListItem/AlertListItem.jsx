import React from 'react'
import { ListItem, ListItemText, Typography } from '@material-ui/core'
import useStyles from './styles'

const AlertListItem = ({ id, product, price, usualprice }) => {
    const classes = useStyles()
    return (
        <ListItem divider={true} className={classes.listItem}>
            <ListItemText
                disableTypography
                primary={ 
                    <>
                        <div className={classes.overlay2}>
                            <Typography type="body2" className={classes.priceNormal}>{usualprice}</Typography>
                        </div>
                        <div className={classes.overlay1}>
                            <Typography type="body2" className={price < usualprice? classes.priceLower : classes.priceNormal}>{price}</Typography>
                        </div>
                        <Typography type="body2" className={price < usualprice? classes.priceLower : classes.priceNormal}>{product}</Typography> 
                    </>
                }
            />
        </ListItem>
    )
}

export default AlertListItem