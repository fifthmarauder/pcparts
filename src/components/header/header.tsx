import styles from "./header.module.css";
import MemoryIcon from "@mui/icons-material/Memory";
const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoBackground}>
            <MemoryIcon sx={{ color: "black", fontSize: "24px" }} />
          </div>
          <div className={styles.logoFont}>
            <div className={styles.logoFont1}>PCPartPicker</div>
            <div className={styles.logoFont2}>PAKISTAN</div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>Home</div>
          <div>Components</div>
        </div>
        <div style={{ display: "flex" }}>
          <div>search</div>
          <div>theme</div>
          <div>start a theme</div>
          <div>sign in</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
