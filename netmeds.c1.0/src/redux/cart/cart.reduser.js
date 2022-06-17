import { ADD_TO_CART } from "./cart.action";

const initstate={
    cartItem:[],
    
}

export const cartReduser=(state=initstate,{type,payload})=>{

    switch(type){
        case ADD_TO_CART:
            return{...state,cartItem:[...state.cartItem,payload]}

        default:
            return state;
    }
}