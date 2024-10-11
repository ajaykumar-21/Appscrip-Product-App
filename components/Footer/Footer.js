import Image from "next/image";
import styles from "./Footer.module.css";
import Flag from "../../assets/usaFlag.svg";
import Insta from "../../assets/Insta.svg";
import Linkd from "../../assets/linkdIn.svg";
import Gpay from "../../assets/gpay.svg";
import Visa from "../../assets/visa.svg";
import Rupay from "../../assets/rupay.svg";
import American from "../../assets/american.svg";
import Apple from "../../assets/applePay.svg";
import Zero from "../../assets/zeroPay.svg";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contactSection}>
        <div>
          <div className={styles.subscribeHeading}>BE THE FIRST TO KNOW</div>
          <p className={styles.subscribeDescrption}>
            Sign up for updates from mettā muse.
          </p>
          <div className={styles.wrapper}>
            <input
              type="text"
              placeholder="Enter your e-mail..."
              className={styles.input}
            />
            <button className={styles.subscribeButton}>SUBSCRIBE</button>
          </div>
        </div>
        <div>
          <div className={styles.contactUS}>CONTACT US</div>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>
            +44 221 133 5360
          </p>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>
            customercare@mettamuse.com
          </p>
          <div className={styles.currency}>CURRENCY</div>
          <div className={styles.flagWrapper}>
            <div>
              <Image src={Flag} alt="USA Flag" />
            </div>{" "}
            <div className={styles.round}></div>
            <div>USD</div>
          </div>
          <p className={styles.transDescription}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className={styles.dividerContainer}>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.socialSection}>
        <div>
          <h2 style={{ marginBottom: "15px" }}>mettā muse</h2>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>About Us</p>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>Stories</p>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>Artisans</p>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>Boutiques</p>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>Contact Us</p>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>
            EU Compliances Docs
          </p>
        </div>
        <div>
          <h3 style={{ marginBottom: "15px" }}>QUICK LINKS</h3>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>
            Orders & Shipping
          </p>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>
            Join/Login as a Seller
          </p>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>
            Payment & Pricing
          </p>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>
            Return & Refunds
          </p>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>FAQs</p>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>Privacy Policy</p>
          <p style={{ marginBottom: "10px", opacity: ".7" }}>
            Terms & Conditions
          </p>
        </div>
        <div>
          <h3>FOLLOW US</h3>
          <div className={styles.socialIcon}>
            <div>
              <Image src={Insta} alt="Insta icon" />
            </div>
            <div>
              {" "}
              <Image src={Linkd} alt="Linkd icon" />
            </div>
          </div>
          <h4 style={{ marginTop: "50px", opacity: ".9" }}>
            mettā muse ACCEPTS
          </h4>
          <div className={styles.cardWrapper}>
            <div>
              <Image src={Gpay} alt="Gpay Icon" />
            </div>
            <div>
              <Image src={Visa} alt="Visa Icon" />
            </div>
            <div>
              <Image src={Rupay} alt="Rupay Icon" />
            </div>
            <div>
              <Image src={American} alt="American Icon" />
            </div>
            <div>
              <Image src={Apple} alt="Apple Icon" />
            </div>
            <div>
              <Image src={Zero} alt="Zero Icon" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
