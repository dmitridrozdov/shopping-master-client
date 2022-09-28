import React, { useState, useEffect } from 'react'
import { ListItem, ListItemText, Typography } from '@material-ui/core'
import { deleteProduct } from '../../../actions/products'
import { useDispatch } from 'react-redux'
import useStyles from './styles'

const woolisApi = {
    base: "https://www.woolworths.com.au/api/v3/ui/schemaorg/product/",
  }

const ListItemCustom = ({ id, product }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [done, setDone] = useState(false)
    const [price, setPrice] = useState(0)
    
    const onClickItem = (id) => {
        dispatch(deleteProduct(id))
        setDone(true)
    }

    const productID = '231598'


    if(price === 0) {
        fetch(`${woolisApi.base}` + productID)
          .then((res) => res.json())
          .then((result) => {
            setPrice(result.offers.price)
          })
          console.log(product)
    }

    return (
        <ListItem divider={true} className={done ? classes.listItemDone : classes.listItem}>
            <ListItemText
                disableTypography
                primary={
                        <>
                            {/* <Typography type="body2" style={{ fontFamily: 'Montserrat', fontSize: '12px', cursor: 'pointer' }}> */}
                            <Typography type="body2" className={classes.listItem}>
                                {product}
                            </Typography>
                            <Typography className={classes.listItem}>{price}</Typography>    
                        </>
                        
                    }
                onClick={() => onClickItem(id)}/>
        </ListItem>
    )
}

export default ListItemCustom
