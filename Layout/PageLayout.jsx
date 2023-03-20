import SideBar from "@/components/SideBar/SideBar";
import { useSelector } from "react-redux";

const PageLayout = ({ children }) => {
  const toggle = useSelector((state) => state.search.toggle);
  return (
    <>
      <main className="flex gap-10 relative ">
        <div className={`w-[17%] h-[100vh] ${toggle ? "border-none" : "border-r-[0.1px]"} z-50`}>
        <SideBar />
        </div>
        <div className="z-[-1]">{children}</div>
        
      </main>
    </>
  );
};

export default PageLayout;
