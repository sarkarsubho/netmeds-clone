import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/product/product.action";
import Box from "@mui/material/Box";
import styles from "./Home.module.css";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { addToCart } from "../redux/cart/cart.action";

export const Home = () => {
  const dispatch = useDispatch();
  const { allproduct } = useSelector((state) => state.product);

  const {cartItem,total} =useSelector(state=>state.cart);
 



  console.log(allproduct);

  useEffect(() => {
    dispatch(getProduct());

  }, []);

  const addtoCart=(prod)=>{
    dispatch(addToCart(prod))
     
  }

  return (
    <div>
      <img
        src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654017250_Home_bannergdfshd.jpg"
        alt=""
      />
      <div className={styles.cartitem}>
        {allproduct.map((prod) => (
          <div key={prod.id}>
            <Box className={styles.box}>
              <img src={prod.image} alt="" />
              <br />
              <h5>{prod.title}</h5>
              <div className={styles.chip}>
                <Stack direction="row" spacing={1}>
                  <Chip label="Devise" size="small" />
                  <Chip label="Measurement" size="small" />
                </Stack>
              </div>
              <div className={styles.detail}>
                <p>{prod.detail.b}</p>
                <div>
                  <h4>Best price* </h4>
                  <span style={{ color: "red" ,fontWeight:"600" ,fontSize:"19px"}}>{`Rs. ${prod.price}.00`}</span>
                </div>

                <p>
                  MRP{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    {" "}
                    Rs.{prod.price + 400}
                  </span>
                </p>
              </div>

             
             
              <Button
                variant="contained"
                style={{ width: "100%", backgroundColor: "rgb(36,174,177)" }}
               onClick={()=>addtoCart(prod)}>
                Add to Cart
              </Button>
            </Box>
          </div>
        ))}
      </div>
   
    </div>
  );
};
