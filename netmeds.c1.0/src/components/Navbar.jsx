import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Avatar from "@mui/material/Avatar";

import ListItemIcon from "@mui/material/ListItemIcon";
import { RiFileList3Line } from "react-icons/ri";
import Input from "@mui/material/Input";

import { alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
import { HiLocationMarker } from "react-icons/hi";
import { BiCurrentLocation } from "react-icons/bi";
import TemporaryDrawer from "./Drower";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 0,
    border: `0px solid ${theme.palette.background.red}`,
    padding: "1px 1px",
  },
}));

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, isAuth } = useSelector((state) => state.auth.login);

  const handleLogin = () => {
    navigate("/Register");
  };

  const { cartItem, total } = useSelector((state) => state.cart);

  console.log(cartItem, total, "navbar");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [pin, setPin] = useState(711111);

  const handlechange = (e) => {
    // console.log(e.target.value)
    if (e.key === "Enter") {
      handleClose();
      setPin(e.target.value);
    }
  };
  return (
    <div className={styles.nav}>
      <div>
        <img
          src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg"
          alt="netmeds"
        />
      </div>

      <div className={styles.input}>
        <div>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            <b>Deliver to {pin}</b>
          </Button>

          <div className={styles.pin}>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <h5>Where do you want the delivery? </h5>
              <span style={{ color: "gray", fontSize: "13px", margin: "10px" }}>
                Get access to your Addresses, Orders, and Wishlist
              </span>
              <Divider sx={{ my: 0.5 }} />
              <h5>Or Enter Pincode</h5>
              <span style={{ color: "gray", fontSize: "13px", margin: "10px" }}>
                Select pincode to see product availability.
              </span>
              <br />

              <MenuItem onDragEnter={handleClose} disableRipple>
                <span>
                  <HiLocationMarker></HiLocationMarker>{" "}
                  <input
                    type="number"
                    className={styles.location}
                    onKeyDown={handlechange}
                  />
                </span>
              </MenuItem>

              <br />
              <span style={{ color: "red", fontSize: "15px" }}>
                <BiCurrentLocation></BiCurrentLocation> Detect my location
              </span>
              {/*               
              <MenuItem onClick={handleClose} disableRipple>
                <MoreHorizIcon />
                More
              </MenuItem> */}
            </StyledMenu>
          </div>
        </div>

        <div>
          <Divider orientation="vertical"></Divider>
        </div>

        <Input
          fullWidth
          placeholder="search for medicin welness Products"
        ></Input>
      </div>





      <div className={styles.last}>
        <div>
          <h4 style={{ fontSize: "16px", margin: "0px" }}>
            <RiFileList3Line></RiFileList3Line>upload
          </h4>
        </div>

        <div
          style={{ display: "flex", width: "13px" }}
          onClick={() => {
            <TemporaryDrawer></TemporaryDrawer>;
          }}
        >
          <IconButton aria-label="cart">
            <StyledBadge
              badgeContent={cartItem.length}
              color="secondary"
              style={{ fontSize: "5px" }}
            >
              
              <ShoppingCartIcon />
            
            </StyledBadge>
            <TemporaryDrawer></TemporaryDrawer>;
          </IconButton>
          
        </div>

        <div className={styles.loginbtn} onClick={handleLogin}>
          <Avatar width="10px" />
          <span>{isAuth ? `${user.name}` : "signin/signup"}</span>
        </div>
      </div>
    </div>
  );
};
