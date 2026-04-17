import HeroSection from "@/components/HeroSection/HeroSection";
import styles from "./page.module.css";
import Builds from "../components/Builds/Builds";

export default function Home() {
  return (
    <div className={styles.main}>
      <HeroSection />
      <Builds />
    </div>
  );
}
