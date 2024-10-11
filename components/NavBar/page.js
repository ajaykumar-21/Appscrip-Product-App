import Image from "next/image";
import starLogo from "../../assets/star-logo.svg";
import Logo from "../../assets/LOGO.svg";
import Search from "../../assets/search.svg";
import Heart from "../../assets/heart.svg";
import ShoppingBag from "../../assets/shopping-bag.svg";
import Profile from "../../assets/profile.svg";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <div>
          <Image src={starLogo} alt="Star Logo" />
        </div>
        <div style={{ paddingLeft: "50px" }}>
          <Image src={Logo} alt="Logo" />
        </div>
        <div className={styles.logoWrapper}>
          <div>
            <Image src={Search} alt="Search" />
          </div>
          <div>
            <Image src={Heart} alt="Heart" />
          </div>
          <div>
            <Image src={ShoppingBag} alt="Shopping Bag" />
          </div>
          <div>
            <Image src={Profile} alt="Profile" />
          </div>
        </div>
      </div>
      <div className={styles.detailsWrapper}>
        <div>SHOP</div>
        <div>SKILLS</div>
        <div>STORIES</div>
        <div>ABOUT</div>
        <div>CONTACT US</div>
      </div>
    </div>
  );
}

export default NavBar;
