import { FETCH_FULL } from '../constants/actionTypes'

export default (products = [], action) => {
    switch (action.type) {
        case FETCH_FULL:
            return action.payload
        default:
            return products
    }
}