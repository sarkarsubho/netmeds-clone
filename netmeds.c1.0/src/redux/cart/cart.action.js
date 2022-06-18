import axios from "axios"

export const ADD_TO_CART="ADD_TO_CART"

export const 
addToCart=(payload)=>(dispatch)=>{
  
    axios.post(" http://localhost:8080/cart",payload).then( res=>console.log(res.data))
    dispatch({type:ADD_TO_CART,payload:{...payload,count:1}})
    // console.log(payload);
}