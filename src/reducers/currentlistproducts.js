import { CREATE, UPDATE, DELETE, FETCH_ALL, FETCH_FULL } from '../constants/actionTypes'

// export default (products = [], action) => {
//     switch (action.type) {
//         case DELETE:
//             return products.filter((products) => products._id !== action.payload)
//         case UPDATE:
//             return products.map((products) => products._id === action.payload._id ? action.payload : products)
//         case FETCH_ALL:
//             return action.payload
//         case FETCH_FULL:
//             return action.payload
//         case CREATE:
//             return [...products, action.payload]
//         default:
//             return products
//     }
// }

export default (currentlistproducts = [], action) => {
    switch (action.type) {
        case DELETE:
            return currentlistproducts.filter((currentlistproducts) => currentlistproducts._id !== action.payload)
        case UPDATE:
            return currentlistproducts.map((currentlistproducts) => currentlistproducts._id === action.payload._id ? action.payload : currentlistproducts)
        case FETCH_ALL:
            return action.payload
        case FETCH_FULL:
            return action.payload
        case CREATE:
            return [...currentlistproducts, action.payload]
        default:
            return currentlistproducts
    }
}