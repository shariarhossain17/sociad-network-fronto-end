import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MoreList from "./MoreList";

const More = () => {
  const [moreModal, setMoreModal] = useState(false);
  return (
    <>
      <div className="mt-32 relative">
        <ul>
          <li
            onClick={() => setMoreModal(!false)}
            className={`hover:bg-gray-50 hover:dark:bg-[#1f1e1e] transition ease-in-out delay-150 px-2 py-2 rounded-full mt-4 flex items-center gap-3 text-[18px]`}
          >
            <AiOutlineMenu size={26} />

            <span>More</span>
          </li>
        </ul>
        {moreModal ? <MoreList /> : null}
      </div>
    </>
  );
};

export default More;
