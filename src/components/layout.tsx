import Footer from "./Footer";
import TitleText from "./TitleText";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <TitleText />
      <main>{children}</main>
      <Footer />
    </>
  );
}
