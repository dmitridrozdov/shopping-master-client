import React, { useState } from 'react'
import { ListItem, ListItemText, Typography } from '@material-ui/core'
import { deleteProduct } from '../../../actions/products'
import { useDispatch } from 'react-redux'
import useStyles from './styles'

const ListItemCustom = ({ id, product }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [done, setDone] = useState(false)
    
    const onClickItem = (id) => {
        dispatch(deleteProduct(id))
        setDone(true)
    }

    return (
        // <ListItem divider={true} classes={{root: classes.divider}}>
        <ListItem divider={true} className={done ? classes.listItemDone : classes.listItem}>
            <ListItemText
                disableTypography
                primary={<Typography type="body2" style={{ fontFamily: 'Montserrat', fontSize: '12px', cursor: 'pointer' }}>{product}</Typography>}
                // onClick={() => dispatch(deleteProduct(id))}/>
                onClick={() => onClickItem(id)}/>
        </ListItem>
    )
}

export default ListItemCustom
