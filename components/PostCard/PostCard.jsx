import Image from "next/image";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineSave } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { TbShare3 } from "react-icons/tb";

import senior from "../../assests/profile-icon/img.jpg";
import profileIcon from "../../assests/profile-icon/profile-icon.png";
const PostCard = () => {

    const [comment,setComment] = useState("")
  return (
    <div className="w-[450px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image width={30} src={profileIcon} alt="profile"></Image>
          <h4 className="font-[500]">shariar17</h4>
          <p className="font-[900] mb-[6px] text-[#adadad]">.</p>
          <p className="text-[#adadad]">11m</p>
        </div>
        <div>
          <BsThreeDots size={24} />
        </div>
      </div>
      <div>
        <Image
          className="w-[100%] h-[500px] rounded-md mt-2"
          src={senior}
          alt="senior"
        ></Image>
      </div>
      <div className="flex justify-between items-center mt-3 ">
        <div className="flex gap-3">
            <AiOutlineHeart size={26}/>
            <BiMessageRounded size={26}/>
            <TbShare3 size={26}/>
        </div>
        <div>
            <AiOutlineSave size={26}/>
        </div>
      </div>
      <div>
        <h2>0 likes</h2>

        <p><span className="font-medium">shariar17</span> Hi crush</p>
      </div>

      <div className="border-b">
        <p className="text-[#adadad]">View all comments</p>
       <div className="relative">
       <textarea onChange={(e) => setComment(e.target.value)} rows='1.5'  className="w-[90%] outline-none py-1  dark:bg-[#121212]" type="text" placeholder="Add a comment"/>
        {comment && <span className="absolute right-0 text-[#3797f0] font-bold hover:text-gray-700 cursor-pointer dark:hover:text-[white]">Post</span>}
       </div>
      </div>
    </div>
  );
};

export default PostCard;
