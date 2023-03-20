import Link from "next/link";
import { useRouter } from "next/router";
import {
    AiFillHome,
    AiFillMessage,
    AiOutlineHome,
    AiOutlineMessage, AiOutlineSearch
} from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { MdExplore, MdOutlineExplore } from "react-icons/md";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";


const SideBar = () => {
  const router = useRouter();

  return (
    <>
      <section className="px-4 pt-6">
        <h1 className="text-[24px] italic font-sans font-[500]">
          <Link href="/"> Medium Share</Link>
        </h1>

        <div className="mt-10 ">
          <ul>
            <li className="">
              <Link
                className={`hover:bg-gray-50 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 px-2 py-2 rounded-full flex items-center gap-3 text-[18px] ${
                  router.pathname === "/" && "font-bold"
                } &`}
                href="/"
              >
                {router.pathname === "/" ? (
                  <AiFillHome size={26} />
                ) : (
                  <AiOutlineHome size={26} />
                )}
                <span> Home</span>
              </Link>
            </li>
            <li
              className={`hover:bg-gray-50 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 px-2 py-2 rounded-full mt-4 flex items-center gap-3 text-[18px]`}
            >
              <AiOutlineSearch size={26} />
              <span> Search</span>
            </li>

            <li className="">
              <Link
                className={`hover:bg-gray-50 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 px-2 py-2 rounded-full mt-4 flex items-center gap-3 text-[18px] ${
                  router.pathname === "/explore" && "font-bold"
                } &`}
                href="/explore"
              >
                {router.pathname === "/explore" ? (
                  <MdExplore size={26} />
                ) : (
                  <MdOutlineExplore size={26} />
                )}
                <span>Explore</span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`hover:bg-gray-50 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 px-2 py-2 rounded-full mt-4 flex items-center gap-3 text-[18px] ${
                  router.pathname === "/reels" && "font-bold"
                } &`}
                href="/reels"
              >
                {router.pathname === "/reels" ? (
                  <RiVideoFill size={26} />
                ) : (
                  <RiVideoLine size={26} />
                )}
                <span>Reels</span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`hover:bg-gray-50 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 px-2 py-2 rounded-full mt-4 flex items-center gap-3 text-[18px] ${
                  router.pathname === "/message" && "font-bold"
                } &`}
                href="/message"
              >
                {router.pathname === "/message" ? (
                  <AiFillMessage size={26} />
                ) : (
                  <AiOutlineMessage size={26} />
                )}
                <span>Message</span>
              </Link>
            </li>
            <li
              className={`hover:bg-gray-50 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 px-2 py-2 rounded-full mt-4 flex items-center gap-3 text-[18px]`}
            >
              <IoCreateOutline size={26} />

              <span>Create</span>
            </li>

            <li className="">
              <Link
                className={`hover:bg-gray-50 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 px-2 py-2 rounded-full mt-4 flex items-center gap-3 text-[18px] ${
                  router.pathname === "/profile" && "font-bold"
                } &`}
                href="/profile"
              >
                {/* {router.pathname === "/profile" ? (
                  <AiFillMessage size={26} />
                ) : (
                  <AiOutlineMessage size={26} />
                )} */}
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideBar;
