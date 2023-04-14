import Link from "next/link";
import Button from "@mui/material/Button";
import styles from "@/styles/header.module.sass";

export default function Navbar() {
  return (
    <div className={styles.navbarStyle}>
      <Link href="/">
        <Button style={{ color: "black" }}>Home</Button>
      </Link>
      <Link href="#brzycki">
        <Button style={{ color: "black" }}>Brzycki</Button>
      </Link>
      <Link href="#epley">
        <Button style={{ color: "black" }}>Epley</Button>
      </Link>
      <Link href="#landers">
        <Button style={{ color: "black" }}>Landers</Button>
      </Link>
    </div>
  );
}
