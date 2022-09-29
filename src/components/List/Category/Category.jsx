import React from 'react'
import { useSelector } from 'react-redux'
import { Fade, List as MUList } from '@material-ui/core'
import useStyles from './styles'
import ListItemCustom from '../ListItem/ListItem'

const Category = ({category}) => {
  const classes = useStyles()
  const currentListProducts = useSelector((state) => state.currentlistproducts)
  const productsForCategory = currentListProducts.filter(p => p.category === category)
  return (
    <MUList className={classes.list}>
      <div style={{ fontFamily: 'Montserrat', fontSize: '10px', color: 'lightgrey' }}>{category}</div>
      {productsForCategory.map((product) => (
        <Fade in={true} key={product._id}>
            <ListItemCustom id={product._id} product={product.product} wid=''/>
        </Fade>
      ))}
    </MUList>

  )
}

export default Category