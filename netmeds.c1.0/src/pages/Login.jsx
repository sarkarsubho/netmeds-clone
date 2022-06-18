import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import styles from "./Login.module.css";
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Auth/Auth.action";

const Login = () => {
  const dispatch = useDispatch();
  const {user,isAuth}=useSelector(state=>state.auth.login);
  console.log(isAuth)
  const navigate=useNavigate()

  const userNameInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: userNameInput.current.value,
      password: passwordInput.current.value,
    };
    console.log(data);
     dispatch(login(JSON.stringify(data)));
     console.log(user)
    //  if(isAuth ){
    //     navigate("/")
    //  }
     {isAuth ? navigate("/"):navigate("/login")}
     console.log(user)
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 style={{ textAlign: "center", margin: "0px" }}>Login</h1>
        <TextField
          helperText="Please enter your UserName"
          id="demo-helper-text-misaligned"
          label="UserName"
          inputRef={userNameInput}
        />
        <TextField
          helperText="Please enter your Password"
          id="demo-helper-text-misaligned"
          label="Password"
          inputRef={passwordInput}
        />

        <TextField
          id="demo-helper-text-misaligned"
          type={"submit"}
          value={"Login"}
        />
      </form>
    </div>
  );
};

export default Login;
