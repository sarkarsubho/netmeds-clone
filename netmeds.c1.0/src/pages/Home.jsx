import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/product/product.action";
import Box from "@mui/material/Box";
import styles from "./Home.module.css";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { addToCart } from "../redux/cart/cart.action";

import { useTheme } from "@mui/material/styles";

import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    
    imgPath:
      "https://www.netmeds.com/images/cms/aw_rbslider/slides/1654017250_Home_bannergdfshd.jpg",
  },
  {
    
    imgPath:
      "https://www.netmeds.com/images/cms/aw_rbslider/slides/1654098465_Home_banner2555.jpg",
  },
  {
    
    imgPath:
      "https://www.netmeds.com/images/cms/aw_rbslider/slides/1654098984_Home_banner23566.jpg",
  }
];

export const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  //corasel end

  const dispatch = useDispatch();
  const { allproduct } = useSelector((state) => state.product);

  const { cartItem, total } = useSelector((state) => state.cart);

  const {user,isAuth}=useSelector(state=>state.auth.login);
  console.log(cartItem)

  console.log(allproduct);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const addtoCart = (prod) => {
    dispatch(addToCart(prod));
  };

  

  return (
    <div>
       <Box sx={{ maxWidth: "95%", flexGrow: 1 ,margin:"auto"}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 355,
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />

              
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
       {/* carosel */}
     
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
                  <span
                    style={{
                      color: "red",
                      fontWeight: "600",
                      fontSize: "19px",
                    }}
                  >{`Rs. ${prod.price}.00`}</span>
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
                onClick={() => addtoCart(prod)}
              >
                Add to Cart
              </Button>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};
