import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeToggler } from "./ThemeToggler";
import star from "~/assets/images/star.png";

const Mobile = () => {
  return (
    <div className="w-full px-4">
      <div className="flex bg-white dark:bg-slate-800  text-[#8A91A8] border-t-[.5px] lg:border-none pt-4 z-10 lg:hidden gap-8 w-full flex-col ">
        <div className="flex   items-center gap-8 justify-between w-full">
          <ul className="flex gap-4 items-center">
            <li>
              <Link className="flex items-center gap-2" to="/">
                Personal{" "}
                <span>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" to="/business">
                Business{" "}
                <span>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center base:w-full sm:w-[350px] gap-2 rounded-[4px] bg-[#F3F4F7] px-4 py-2 ">
            <span>
              <AiOutlineSearch />
            </span>
            <input
              className="w-full text-gray-800 bg-transparent border-none  p-0 outline-none"
              placeholder="Find cards anywhere"
            />
          </div>
          <ThemeToggler />
        </div>
        <div className="flex justify-start gap-6 items-center w-full">
          <Link className="text-[14px]" to="">
            Login
          </Link>
          <button className="flex text-[14px] font-semibold gap-2 items-center px-4 py-2 text-white rounded-[4px] bg-[#0078FF]">
            Get Started <img src={star} alt="Star Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
