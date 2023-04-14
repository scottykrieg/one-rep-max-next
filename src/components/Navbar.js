import Link from "next/link";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import styles from "@/styles/header.module.sass";

export default function Navbar() {
  return (
    <div className={styles.navbarStyle}>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text button group"
      >
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="#brzycki">
          <Button>Brzycki</Button>
        </Link>
        <Link href="#epley">
          <Button>Epley</Button>
        </Link>
        <Link href="#landers">
          <Button>Landers</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}
