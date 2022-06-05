import digiftLogo from "~/assets/images/difgitLogo.png";
import star from "~/assets/images/star.png";

//icons
import { FaBars } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

//utils
import { Link } from "react-router-dom";

//components
import { ThemeToggler } from "./ThemeToggler";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-slate-800 text-[#8A91A8]  shadow-custom ">
      <div className="flex w-full px-4 py-4 max-w-[1400px]  mx-auto justify-between items-center">
        <div className="w-full  justify-between items-center">
          <div role="link" className="w-[100px] h-[50px]">
            <img
              className="img object-contain"
              src={digiftLogo}
              alt="DifIft Logo"
            />
          </div>
          <button className="sm:flex md:hidden ">
            <FaBars />
          </button>
        </div>
        <div className="flex  items-center gap-8 justify-between w-full">
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
        <div className="flex justify-end gap-6 items-center w-full">
          <Link className="text-[14px]" to="">
            Login
          </Link>
          <button className="flex text-[14px] font-semibold gap-2 items-center px-4 py-2 text-white rounded-[4px] bg-[#0078FF]">
            Get Started <img src={star} alt="Star Icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
