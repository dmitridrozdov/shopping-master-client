import React, { useState, useEffect } from 'react'
import { ListItem, ListItemText, Typography } from '@material-ui/core'
import { deleteProduct } from '../../../actions/products'
import { useDispatch } from 'react-redux'
import useStyles from './styles'

const woolisApi = {
    base: "https://www.woolworths.com.au/api/v3/ui/schemaorg/product/",
  }

const ListItemCustom = ({ id, product, wid }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [done, setDone] = useState(false)
    const [price, setPrice] = useState(0)
    const [productName, setProductName] = useState('')
    
    const onClickItem = (id) => {
        dispatch(deleteProduct(id))
        setDone(true)
    }

    // const productID = '231598'

    if(wid !== '') {
        if(price === 0) {
            fetch(`${woolisApi.base}` + wid)
              .then((res) => res.json())
              .then((result) => {
                setPrice(result.offers.price)
                setProductName(result.name)
              })
        }
    } 

    return (
        <ListItem divider={true} className={done ? classes.listItemDone : classes.listItem}>
            <ListItemText
                disableTypography
                primary={
                        <>
                            <Typography type="body2" style={{ fontFamily: 'Montserrat', fontSize: '12px', cursor: 'pointer' }}>
                            {/* <Typography type="body2" className={productName === '' ? classes.listItem : classes.listItemFromWoolis}> */}
                                {productName === '' ? product : productName}
                            </Typography>
                            <Typography className={classes.overlay}>{productName === '' ? '' : price + '$'}</Typography>    
                        </>
                        
                    }
                onClick={() => onClickItem(id)}/>
        </ListItem>
    )
}

export default ListItemCustom
