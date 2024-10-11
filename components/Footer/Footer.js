import Image from "next/image";
import styles from "./Footer.module.css";
import Flag from "../../assets/usaFlag.svg";

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
          <p style={{ marginBottom: "10px" }}>+44 221 133 5360</p>
          <p style={{ marginBottom: "10px" }}>customercare@mettamuse.com</p>
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
    </div>
  );
}

export default Footer;
