import { GrDocumentVideo } from "react-icons/gr";

const Modal = () => {
  return (
    <>
      <div className="bg-white w-[450px] h-[500px] shadow-2xl fixed top-[100px] left-[460px]   rounded-[15px] dark:bg-[#262626] ">
        <div className="border-b p-2">
          <h2 className="text-[16px] font-[600] text-center ">
            Create New Post
          </h2>
        </div>
        <div className="flex flex-col items-center mt-[190px]">
          <GrDocumentVideo className="" size={50} />
          <h2 className="text-[20px] mt-1">Drag photos and videos here</h2>

          <form action="/action_page.php">
            <label for="myfile">Select files:</label>
            <input type="file" id="myfile" name="myfile" multiple />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
