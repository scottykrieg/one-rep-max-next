import Navbar from "./Navbar";
import Footer from "./Footer";
import TitleText from "./TitleText";
import styles from "./src/styles/Footer.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <TitleText />
      <main>{children}</main>
      <Footer />
    </>
  );
}
