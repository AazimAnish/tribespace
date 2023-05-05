import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';

import "./Navbar.scss"

const supabase = createClient('https://ulobuwxqwbruszgeonsk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsb2J1d3hxd2JydXN6Z2VvbnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMzEzMDEsImV4cCI6MTk5ODgwNzMwMX0.qRgmFEWxzrDgjB5pjYi8MfmbaAcRvJCI-f5ZPA3YYJE');

const Navbar = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const session = supabase.auth.getSession();
    setLoggedIn(session !== null);
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      setLoggedIn(false);
    }
  };

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
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Catalogue</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            {loggedIn ? (
              <button className="icon-button" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link className="link" to="/login.jsx">
                <button className="icon-button">
                  <PersonOutlineOutlinedIcon/>
                </button>
              </Link>
            )}
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;