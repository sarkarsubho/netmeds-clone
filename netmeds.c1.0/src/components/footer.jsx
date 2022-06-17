import { TextField } from "@mui/material";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import styles from "./Footer.module.css";
import Divider from "@mui/material/Divider";

export const Footer = () => {
  return (
    <><br />
        <hr />
        <br />
      <div className={styles.main}>
        
        <div>
          <h4>COMPANY</h4>
          <p>About Netmeds </p>
          <p>Customers Speak</p>
          <p>In the News</p>
          <p>Career</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Fees and Payments Policy</p>
          <p>Shipping and Delivery Policy</p>
          <p>Return, Refund and Cancellation Policy</p>
          <p>Contact</p>
        </div>
        <div>
          <h4>SHOPING</h4>
          <p>Browse by A-Z</p>
          <p>Browse by Manufacturers</p>
          <p>Health Articles</p>
          <p>Offers / Coupons</p>
          <p>FAQs</p>
        </div>

        <div>
          <h4>SOCIAL</h4>
          <p>Patients Alike</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Youtube</p>
          <p>Refer & Earn</p>
        </div>
        <div>
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <p>
            Get a free subscription to our health and fitness tip and stay tuned
            to our latest offers
          </p>
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <FiArrowRight color="green" size={30}></FiArrowRight>
          <br />
          <div className={styles.download}>
            <div>
              <IoLogoGooglePlaystore size={"30px"}></IoLogoGooglePlaystore>
              <span>
                get it on <br /> <b> google play</b>
              </span>
            </div>
            <div>
              <BsApple size={"30px"}></BsApple>
              <span>
                download from
                <br />
                <b> Apple Store</b>
              </span>
            </div>
          </div>
        </div>
        <Divider></Divider>
        <Divider></Divider>
        <Divider></Divider>
        <Divider></Divider>
        
      </div>
      <div className={styles.endtab}>
        <p>Medicine</p>
        <p>Wellness</p>
        <p>Labtest </p>
        <p>Beauty</p>
        <p> Copyright© 2022. All Rights Reserved.</p>
      </div>
    </>
  );
};
