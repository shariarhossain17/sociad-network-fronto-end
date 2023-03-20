import Theme from "@/components/Theme/Theme";
import PageLayout from "@/Layout/PageLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
    <>

    
      <h1>Hello Instagram Home page</h1>

      <Theme/>
    </>
  );
}

Home.Layout = PageLayout;
