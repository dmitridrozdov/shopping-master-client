import React from 'react'
import { Fade, List as MUList } from '@material-ui/core'
import useStyles from './styles'
import { useSelector } from 'react-redux'
// import { deleteProduct } from '../../actions/products'
// import { useDispatch } from 'react-redux'
import ListItemCustom from './ListItem/ListItem'
import Category from './Category/Category'

const List = () => {
    const classes = useStyles()
    const currentListProducts = useSelector((state) => state.currentlistproducts)
    // const dispatch = useDispatch()

    const transformToCategoryProductStructure = () => {
        const onlyUnique = (value, index, self) => {
            return self.indexOf(value) === index;
        }
        return currentListProducts.map(p => p.category).filter(onlyUnique)
    }

    const categoriesWithProducts = transformToCategoryProductStructure()

    return (
        <MUList className={classes.list}>
            {/* {currentListProducts.map((product) => (
                <Fade in={true} key={product._id}>
                    <ListItemCustom id={product._id} product={product.product}/>
                </Fade>
            ))} */}
            {categoriesWithProducts.map(c => (
                <Fade in={true} key={c._id}>
                    <Category id={c._id} category={c}/>
                </Fade>
            ))}
        </MUList>
    )
}

export default List
