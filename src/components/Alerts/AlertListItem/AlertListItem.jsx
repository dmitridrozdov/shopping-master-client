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
                            <Typography type="body2" style={{ fontFamily: 'Architects Daughter', fontSize: '12px', cursor: 'pointer' }}>{usualprice}</Typography>
                        </div>
                        <div className={classes.overlay1}>
                            <Typography type="body2" style={{ fontFamily: 'Architects Daughter', fontSize: '12px', cursor: 'pointer' }}>{price}</Typography>
                        </div>
                        <Typography type="body2" style={{ fontFamily: 'Architects Daughter', fontSize: '12px', cursor: 'pointer' }}>{product}</Typography> 
                    </>
                }
            />
        </ListItem>
    )
}

export default AlertListItem