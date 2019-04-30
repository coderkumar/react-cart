import { combineReducers} from "redux"

import productList from "./prodListReducer"
import product from "./productReducer"

export default combineReducers({
    productList,
    product
})