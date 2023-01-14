import React from "react";
import logo from "./../images/logo.svg";
import styles from "./header.module.css";

const Header = ()=> {
  return (
    <div className={styles.header}>
      <img src={logo} alt="HeaderLogo"/>
    </div>
  );
}

export default Header;

