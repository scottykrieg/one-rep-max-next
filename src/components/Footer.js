import styles from "@/styles/footer.module.sass";
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiNextdotjs, SiMui, SiTypescript } from "react-icons/si";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <>
      <div className={styles.footerCard}>
        <div className={inter.className}>
          <h6>Created by Scotty Krieg, Using:</h6>
          <div className={styles.footerGrid}>
            <FaReact size={30} />
            <SiTypescript size={30} />
            <SiNextdotjs size={30} />
            <SiFirebase size={30} />
            <SiMui size={30} />
          </div>
        </div>
      </div>
    </>
  );
}
