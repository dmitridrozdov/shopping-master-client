import React from 'react'
import { useSelector } from 'react-redux'
import { Fade, List as MUList } from '@material-ui/core'
import useStyles from './styles'

const Category = ({category}) => {
  const classes = useStyles()
  const currentListProducts = useSelector((state) => state.currentlistproducts)
  const productsForCategory = currentListProducts.filter(p => p.category === category)
  console.log(category)
  productsForCategory.forEach(p => {
    console.log(p.product)
  })
  console.log('-----')
  return (
    <MUList className={classes.list}>
      <div>{category}</div>
      {productsForCategory.map((product) => (
        <Fade in={true} key={product._id}>
            {/* <ListItemCustom id={product._id} product={product.product}/> */}
            <div>{product.product}</div>
        </Fade>
      ))}
    </MUList>

  )
}

export default Category