import React from 'react'
import { useSelector } from 'react-redux'

const Category = (category) => {
  const currentListProducts = useSelector((state) => state.currentlistproducts)
  return (
    <div>Categories</div>
  )
}

export default Category