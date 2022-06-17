import axios from "axios";

export const GET_PRODUCT_LOADING="GET_PRODUCT_LOADING";
export const GET_PRODUCT_SUCCESS="GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_ERROR="GET_PRODUCT_ERROR";

export const getProduct=()=>(dispatch)=>{
dispatch({type:GET_PRODUCT_LOADING});

axios.get("http://localhost:8080/product").then(res=>dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})).catch(err=>dispatch({type:GET_PRODUCT_ERROR}))

}