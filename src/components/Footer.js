import { Card } from "@mui/material";
import styles from "src/styles/footer.module.sass";
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiNextdotjs, SiMui, SiTypescript } from "react-icons/si";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <>
      <div className={styles.footerCard}>
        <div className={inter.className}>
          <Card className={styles.footer}>
            <h6>Created by Scotty Krieg Copyright 2023</h6>
            <h6>Created Using:</h6>
            <div className="styles.footer-grid">
              <SiMui />
              <SiTypescript />
              <FaReact />
              <SiNextdotjs />
              <SiFirebase />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
