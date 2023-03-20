import Link from "next/link";
import { AiOutlineSave } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { GoReport } from "react-icons/go";
import Theme from "../Theme/Theme";

const MoreList = () => {
  return (
    <>
      <ul className="absolute  right-[-10px] top-[-290px] rounded-md bg-white shadow-md dark:bg-[#262626] w-[200px]">
        <li className="">
          <Link
            className={`hover:bg-gray-100 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 p-2  flex items-center justify-between gap-3 text-[16px] dark:border-none border-b-[2px]`}
            href="/"
          >
            <span> Setting</span>
            <BsGear size={24} />
          </Link>
        </li>
        <li className="">
          <Link
            className={`hover:bg-gray-100 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 p-2 flex items-center justify-between gap-3 text-[16px] dark:border-none border-b-[2px]`}
            href="/"
          >
            <span>Your Activity</span>
            <BiTimeFive size={24} />
          </Link>
        </li>
        <li className="">
          <Link
            className={`hover:bg-gray-100 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 p-2 flex items-center justify-between gap-3 text-[16px] dark:border-none border-b-[2px]`}
            href="/"
          >
            <span>Saved</span>
            <AiOutlineSave size={24} />
          </Link>
        </li>
        <li
          className={`hover:bg-gray-50 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 p-2 flex items-center justify-between gap-3 text-[16px] dark:border-none border-b-[2px]`}
        >
          <Theme />
        </li>
        <li className="">
          <Link
            className={`hover:bg-gray-50 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 p-2 flex items-center justify-between gap-3 text-[16px] dark:border-none border-b-[2px]`}
            href="/"
          >
            <span>Report a problem</span>
            <GoReport size={24}/>
          </Link>
        </li>
        <li className="">
          <Link
            className={`hover:bg-gray-50 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 p-2 flex items-center justify-between gap-3 text-[16px] dark:border-none border-b-[2px]`}
            href="/"
          >
            <span>Switch Account</span>
          </Link>
        </li>
        <li className="">
          <Link
            className={`hover:bg-gray-50 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 p-2 flex items-center justify-between gap-3 text-[16px] dark:border-none border-b-[2px]`}
            href="/"
          >
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MoreList;
