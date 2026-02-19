import styles from "./header.module.css";
import MemoryIcon from "@mui/icons-material/Memory";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
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
        <div className={styles.redirects}>
          <div className={styles.buttons}>Home</div>
          <div className={styles.buttons}>Build a PC</div>
          <div
            className={styles.buttons}
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            Components
            <KeyboardArrowDownIcon />
          </div>
          <div
            className={styles.buttons}
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            Community Builds
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className={styles.actions}>
          <div>
            <SearchIcon sx={{ color: "white", fontSize: "18px" }} />
          </div>
          <div>
            <WbSunnyOutlinedIcon sx={{ color: "white", fontSize: "18px" }} />
          </div>
          <div className={styles.actionButton1}>Start a Build</div>
          <div className={styles.actionButton2}>
            <LogoutIcon sx={{ fontSize: "14px" }} /> Sign In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
