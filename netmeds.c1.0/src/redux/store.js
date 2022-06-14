
import {legacy_createStore ,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk"

const rootReduser=combineReducers({

})

export const store=legacy_createStore(rootReduser,applyMiddleware(thunk))