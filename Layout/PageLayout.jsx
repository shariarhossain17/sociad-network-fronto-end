import SideBar from "@/components/SideBar/SideBar";

const PageLayout = ({ children }) => {
  return (
    <>
      <main className="flex gap-10">
        <div className="w-[17%] h-[100vh] border-r-[0.1px] border-[#8e8e8e] dark:border-[#8e8e8e]">
          <SideBar />
        </div>
        <div>{children}</div>
      </main>
    </>
  );
};

export default PageLayout;
