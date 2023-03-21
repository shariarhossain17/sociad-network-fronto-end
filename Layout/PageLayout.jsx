import Modal from "@/components/Modal/Modal";
import SideBar from "@/components/SideBar/SideBar";
import { useSelector } from "react-redux";

const PageLayout = ({ children }) => {
  const toggle = useSelector((state) => state.search.toggle);
  return (
    <>
      <main className="flex gap-10 ">
        <div className={`w-[17%] h-[100vh] border-r-[0.1px]`}>
          <SideBar />
        </div>
        <div className="">{children}
       {
        toggle && <Modal/>
       }
        </div>
      </main>
    </>
  );
};

export default PageLayout;
