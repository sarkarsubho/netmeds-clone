import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/Auth/Auth.action";

export const Register = () => {
  const { success } = useSelector((state) => state.auth.register);
  console.log(success)
  const navigate = useNavigate();

  const nameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const userNameInput = useRef();
  const mobileInput = useRef();
  const discriptionInput = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      name: nameInput.current?.value,
      email: emailInput.current?.value,
      password: passwordInput.current?.value,
      username: userNameInput.current?.value,
      mobile: mobileInput.current?.value,
      description: discriptionInput.current?.value,
    };
    data = JSON.stringify(data);
    dispatch(register(data));

    console.log(data);
    if (success) {
      navigate("/login");
    }
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 style={{ textAlign: "center", margin: "0px" }}>register</h1>

        <TextField
          helperText="Please enter your Name"
          id="demo-helper-text-misaligned"
          label="Name"
          inputRef={nameInput}
        />
        <TextField
          helperText="Please enter your Name"
          id="demo-helper-text-misaligned"
          label="Email"
          inputRef={emailInput}
        />
        <TextField
          helperText="Please enter your Password"
          id="demo-helper-text-misaligned"
          label="Password"
          inputRef={passwordInput}
        />
        <TextField
          helperText="Please enter your UserName"
          id="demo-helper-text-misaligned"
          label="UserName"
          inputRef={userNameInput}
        />
        <TextField
          helperText="Please enter your Mobile NO."
          id="demo-helper-text-misaligned"
          label="Mobile"
          inputRef={mobileInput}
        />
        <TextField
          helperText="Please enter your Discription"
          id="demo-helper-text-misaligned"
          label="Discription"
          inputRef={discriptionInput}
        />
        <TextField id="demo-helper-text-misaligned" type={"submit"} />
      </form>

      <p>
        Already have an Account{" "}
        <span>
          <Link to="/login"> Login</Link>
        </span>
      </p>
    </div>
  );
};
