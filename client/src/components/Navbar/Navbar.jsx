import React from "react";
import { useState } from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/artlogo.png" height="100px" width="200px" alt="" />
          </div>
        </div>
        
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/crowdfund.jsx">Crowdfunding</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/:id">Catalogue</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <button className="icon-button" onClick={() => {window.location.href="/login.jsx"}}>
              <PersonOutlineOutlinedIcon/>
            </button>
            <button className="fav" onClick={()=>{window.location.href="./"}}>
              <FavoriteBorderOutlinedIcon/>
            </button>
            <button className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
              </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Navbar;
