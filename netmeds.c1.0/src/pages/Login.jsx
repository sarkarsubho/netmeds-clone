
import React from "react";
import TextField from '@mui/material/TextField';
import styles from "./Login.module.css";

export const Login = () => {
  return <div>
    

    <form action="" className={styles.form}>
        <h1 style={{textAlign:"center",margin:"0px"}}>register</h1>
        
        <TextField
        helperText="Please enter your Name"
        id="demo-helper-text-misaligned"
        label="Name"
      />
      <TextField
        helperText="Please enter your Password"
        id="demo-helper-text-misaligned"
        label="Password"
      />
      <TextField
        helperText="Please enter your UserName"
        id="demo-helper-text-misaligned"
        label="UserName"
      />
      <TextField
        helperText="Please enter your Mobile NO."
        id="demo-helper-text-misaligned"
        label="Mobile"
      />
      <TextField
        helperText="Please enter your Discription"
        id="demo-helper-text-misaligned"
        label="Discription"
      />
      <TextField
        
        
        id="demo-helper-text-misaligned"
        type={"submit"}
      />
      
    </form>


  

  </div>;
};
