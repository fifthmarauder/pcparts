import Button from "../common/Button/Button";
import styles from "./page.module.css";
import MemoryIcon from "@mui/icons-material/Memory";

const HeroSection = () => {
  return (
    <div className={styles.main}>
      <div className={styles.firstContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.headingPill}>
            <MemoryIcon sx={{ fontSize: "16px" }} />
            Pakistan's #1 PC Building Platform
          </div>
          <div className={styles.heading}>
            Build Your{" "}
            <span style={{ color: "var(--color-textGreen)" }}>Dream PC</span>
          </div>
          <div className={styles.description}>
            Compare prices from 50+ Pakistani retailers, verify component
            compatibility, and join a community of 100,000+ PC builders.
          </div>
          <div className={styles.buttonStyle}>
            <Button
              text={"Start Building"}
              containerStyles={{
                backgroundColor: "var(--color-textGreen)",
                fontSize: "14px",
                padding: "12px 32px",
              }}
            />
            <Button text={"Browse Builds"} />
          </div>
        </div>
        {/* rightconrainer */}
        <div className={styles.rightconrainer}></div>
      </div>
      <div className={styles.secondContainer}></div>
    </div>
  );
};

export default HeroSection;
