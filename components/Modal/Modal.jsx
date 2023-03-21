import { closeModal } from "@/features/search/searchSlice";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();

  const [image,setImage] = useState()

  const handleFile = (e) => {
    e.preventDefault()
    
    console.log(image);
  }
  return (
    <>
      <div className="bg-white w-[450px] h-[500px] shadow-2xl fixed top-[100px] left-[460px]   rounded-[15px] dark:bg-[#262626] ">
        <div className="border-b relative p-2 flex justify-center items-center">
          <h2 className="text-[16px] font-[600] text-center ">
            Create New Post
          </h2>
          <AiOutlineClose
            onClick={() => dispatch(closeModal())}
            className="absolute right-0"
            size={26}
          />
        </div>
        <div className="flex flex-col items-center mt-[150px]">
          <MdOutlineVideoLibrary className="" size={50} />
          <h2 className="text-[20px] mt-1">Drag photos and videos here</h2>

          <form  className="mt-4" action="#">
            <label
              className="bg-[#0095f6] text-white font-[500] px-2 py-1 rounded-md "
              for="myfile"
            >
              Select From Computer
            </label>
            <input
              // onClick={(e) => console.log(e.target.files[0])}
              className="hidden"
              type="file"
              id="myfile"
              name="myfile"
              multiple
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
