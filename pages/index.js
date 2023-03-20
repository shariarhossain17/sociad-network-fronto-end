import Theme from "@/components/Theme/Theme";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <h1>Hello Instagram</h1>

    <Theme/>
    </>
  );
}
