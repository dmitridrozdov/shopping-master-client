import { combineReducers } from 'redux'
import currentlistproducts from './currentlistproducts'
import products from './products'

export default combineReducers({ currentlistproducts, products })