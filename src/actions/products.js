import * as api from '../api'
import { CREATE, FETCH_ALL, DELETE, FETCH_FULL } from '../constants/actionTypes'

export const getALLProducts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchAllProducts()
        dispatch({ type: FETCH_FULL, payload: data })
    } catch(error) {
        console.log(error)
    }   
}

export const getProducts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchProducts()
        dispatch({ type: FETCH_ALL, payload: data })
    } catch(error) {
        console.log(error)
    }   
}

export const createProduct = (product) => async(dispatch) => {
    try {
        const { data } = await api.createProduct(product)
        dispatch({ type: CREATE, payload: data })
    } catch(error) {
        console.log(error)
    }   
}

export const deleteProduct = (id) => async(dispatch) => {
    try {
        await api.deleteProduct(id)
        dispatch({ type: DELETE, payload: id })
        console.log('delete product' + id)
    } catch(error) {
        console.log(error)
    }
}