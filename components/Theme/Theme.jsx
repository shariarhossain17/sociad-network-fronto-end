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
      <div className="flex items-center gap-2">
        <h4>Switch Appearance</h4>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          <MdOutlineDarkMode size={24} />
        </button>
      </div>
    </div>
  );
};

export default Theme;
