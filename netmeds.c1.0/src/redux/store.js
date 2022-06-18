
import {legacy_createStore ,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk"
import { authReduser } from "./Auth/Auth.reduser";
import { cartReduser } from "./cart/cart.reduser";
import { productReduser } from "./product/product.reduser";

const rootReduser=combineReducers({
cart:cartReduser,
product:productReduser,
auth:authReduser
})

export const store=legacy_createStore(rootReduser,applyMiddleware(thunk))