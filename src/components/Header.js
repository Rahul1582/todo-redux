import React from "react";
import logo from "./../images/logo.svg";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="HeaderLogo"/>
    </div>
  );
}

