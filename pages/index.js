import { useTheme } from "next-themes";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  },[])

  if(!mounted) return null
  return (
    <>
      <h1>Hello Instagram</h1>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "dark" ? "light" : "dark"}
      </button>
    </>
  );
}
