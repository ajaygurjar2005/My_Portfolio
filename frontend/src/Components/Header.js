import "./Header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";

const Header = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toggleDropdown = () => setDropdown(!dropdown);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const response = axios
      .get("http://localhost:8000/getcategory")
      .then((succes) => {
        console.log(succes.data.data);
        setCategories(succes.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className="logo" onClick={closeMobileMenu}>
        <h1>My Portfolio</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={closeMobileMenu} style={{ fontSize: "20px" }}>
            Home
          </Link>
        </li>
        
        <li>
          <Link
            to="/about"
            onClick={closeMobileMenu}
            style={{ fontSize: "20px" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            style={{ fontSize: "20px" }}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            onClick={closeMobileMenu}
            style={{ fontSize: "20px" }}
          >
            Our Services
          </Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <Link to="#" className="dropbtn" onClick={(e) => e.preventDefault()}>
            Category
          </Link>
          {dropdown && (
            <div className="dropdown-content">
              {categories.map((data) => {
                return (
                  <Link to="/" onClick={closeMobileMenu}>
                    {data.category}
                  </Link>
                );
              })}
            </div>
          )}
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Header;
