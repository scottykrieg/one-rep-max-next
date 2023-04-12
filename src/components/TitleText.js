import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <div className={inter.className}>
      <h1>One-Rep-Max Calculator</h1>
    </div>
  );
}
