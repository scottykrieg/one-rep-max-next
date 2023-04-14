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
            <h6>Created by Scotty Krieg, Using:</h6>
            <div className="styles.footer-grid">
              <SiMui size={30} />
              <SiTypescript size={30} />
              <FaReact size={30} />
              <SiNextdotjs size={30} />
              <SiFirebase size={30} />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
