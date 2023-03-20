import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MdOutlineDarkMode } from "react-icons/md";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <div
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <h4>Switch Appearance</h4>
        <button>
          <MdOutlineDarkMode size={24} />
        </button>
      </div>
    </div>
  );
};

export default Theme;
