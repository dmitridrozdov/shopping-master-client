import React from 'react'
import { Fade, List as MUList } from '@material-ui/core'
import useStyles from './styles'
import { useSelector } from 'react-redux'
// import { deleteProduct } from '../../actions/products'
// import { useDispatch } from 'react-redux'
import ListItemCustom from './ListItem/ListItem'

const List = () => {
    const classes = useStyles()
    const currentListProducts = useSelector((state) => state.products)
    // const dispatch = useDispatch()

    return (
        <MUList className={classes.list}>
            {currentListProducts.map((product) => (
                <Fade in={true} key={product._id}>
                    <ListItemCustom id={product._id} product={product.product}/>
                </Fade>
            ))}
        </MUList>
    )
}

export default List
