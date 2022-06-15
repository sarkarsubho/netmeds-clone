import React from 'react';
import styles from"./Navbar.module.css";

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Avatar from '@mui/material/Avatar';

import ListItemIcon from '@mui/material/ListItemIcon';
import { RiFileList3Line } from "react-icons/ri";




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 0,
    border: `0px solid ${theme.palette.background.red}`,
    padding: '1px 1px',
    
  },
}));

export const Navbar = () => {

   let pin=713212
  return (
    <div className={styles.nav}>
        <div>
            <img src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="netmeds" />
            
            
        </div>

        <div>
              
        </div>

        <div className={styles.last}>
            
            
            <div>

              <h4 style={{fontSize:"16px",margin:"0px"}}><RiFileList3Line></RiFileList3Line>upload</h4>
            </div>
            
            
            <div style={{display:"flex",width:"13px"}}>

            <IconButton aria-label="cart">
              <StyledBadge badgeContent={5} color="secondary" style={{fontSize:"5px"}}>
                <ShoppingCartIcon  />
              </StyledBadge>
            </IconButton>
             <h4>cart</h4>
                    
            </div>

            <div>
            <Avatar src="/broken-image.jpg" />

            signin/signup
            </div>
            
            
        </div>


    </div>
  )
}
