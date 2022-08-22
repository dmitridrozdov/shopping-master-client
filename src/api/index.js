import axios from 'axios'

const url = 'http://localhost:5000/currentlist'
const allProductsUrl = 'http://localhost:5000/products'
// const url = 'https://shopping-master-2.herokuapp.com/currentlist'

export const fetchProducts = () => axios.get(url)
export const createProduct = (product) => axios.post(url, product)
export const deleteProduct = (id) => axios.delete(`${url}/${id}`)

export const fetchAllProducts = () => axios.get(allProductsUrl)