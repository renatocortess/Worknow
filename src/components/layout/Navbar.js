import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";


import { FcHome } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcFilingCabinet } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";

function Navbar() {
  return (
    <div className={styles.navbar}>
   
        
        <ul className={styles.list}>
          <li className={styles.item}>
          
            <Link  to="/">  <FcHome /></Link>
          </li>
          <li className={styles.item}>
            <Link  to="/projects"> <FcBriefcase/></Link>
          </li>
          <li className={styles.item}>
            <Link  to="/company"><FcFilingCabinet/></Link>
          </li>
          <li className={styles.item}>
            <Link  to="/contact"><FcBiotech/></Link>
          </li>
        </ul>
     
    </div>
  );
}

export default Navbar;
