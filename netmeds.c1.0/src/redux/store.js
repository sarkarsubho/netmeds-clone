
import {legacy_createStore ,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk"
import { cartReduser } from "./cart/cart.reduser";

const rootReduser=combineReducers({
cart:cartReduser
})

export const store=legacy_createStore(rootReduser,applyMiddleware(thunk))