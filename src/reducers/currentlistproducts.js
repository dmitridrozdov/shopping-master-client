import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionTypes'

export default (currentlistproducts = [], action) => {
    switch (action.type) {
        case DELETE:
            return currentlistproducts.filter((currentlistproducts) => currentlistproducts._id !== action.payload)
        case UPDATE:
            return currentlistproducts.map((currentlistproducts) => currentlistproducts._id === action.payload._id ? action.payload : currentlistproducts)
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...currentlistproducts, action.payload]
        default:
            return currentlistproducts
    }
}