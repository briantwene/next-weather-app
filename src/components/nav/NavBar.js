import React from "react";
import { Link } from "react-router-dom";
import { navData } from "./navData";
import styles from "./navbar.module.scss";

function NavBar() {
  return (
    <>
      {navData.map((navItem) => {
        return (
          <Link to={navItem.path} className={styles.link}>
            <div className={styles.navLink}>
              <span>{navItem.icon}</span>
              <span className={styles.navLinkName}>{navItem.name}</span>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default NavBar;
