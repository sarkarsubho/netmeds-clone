import axios from "axios";

export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

export const LOG_LOADING="LOG_LOADING";

export const LOG_SUCCESS="LOG_LSUCCESS";

export const LOG_ERROR="LOG_ERROR";

export const login = (payload) => async (dispatch) => {
    dispatch({type:LOG_LOADING});

  console.log(payload);
  await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    body: payload,
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {console.log(data);
    
        

        const username =JSON.parse(payload).username;
        fetch (`https://masai-api-mocker.herokuapp.com/user/${username}`,{
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${data.token}`}
        }).then(data2=>data2.json()).then(data2=>{console.log(data2);
            dispatch({type:LOG_SUCCESS,payload:data2});})
    
    }
    
    
    ).catch(err=>{dispatch({type:LOG_ERROR})});
};

export const register = (payload) => async (dispatch) => {
  //   await axios
  //     .post("https://masai-api-mocker.herokuapp.com/auth/register", payload)
  //     .then(res=>res.json())
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  dispatch({ type: AUTH_LOADING });

  console.log(payload);
  await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    body: payload,
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .then((res) => dispatch({ type: AUTH_SUCCESS }))
    .catch((err) => dispatch({ type: AUTH_ERROR }));
};
