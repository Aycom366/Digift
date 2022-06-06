import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeToggler } from "./ThemeToggler";
import star from "~/assets/images/star.png";
import { useGlobalContext } from "~/store/Context";
import { useEffect, useRef } from "react";
import useWindowDimension from "~/hooks/useWindowDimension";

const Mobile = () => {
  const { isNavOpen, setIsNavOpen } = useGlobalContext();
  const { width } = useWindowDimension();
  const navContainer = useRef<HTMLDivElement>(null);
  const navContainerChild = useRef<HTMLDivElement>(null);
  const handleNavClose = () => setIsNavOpen(false);

  useEffect(() => {
    const navContainerChildHeight =
      navContainerChild.current?.getBoundingClientRect().height;
    if (isNavOpen) {
      if (navContainer.current !== null)
        navContainer.current.style.height = `${navContainerChildHeight}px`;
    } else {
      if (navContainer.current !== null)
        navContainer.current.style.height = "0px";
    }
  }, [isNavOpen, width]);

  //close nav if window is more than md reoslution
  useEffect(() => {
    if (width > 768) {
      setIsNavOpen(false);
    }
  }, [width]);

  return (
    <div
      ref={navContainer}
      className="w-full overflow-hidden transition-all ease-in-out duration-300 px-4"
    >
      <div
        ref={navContainerChild}
        className="flex transition ease duration-1000 bg-white dark:bg-slate-800  text-[#8A91A8] border-t-[.5px] lg:border-none pt-4 z-10 lg:hidden  gap-4 sm:gap-8 w-full flex-col "
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 justify-between w-full">
          <ul className="flex gap-4 items-center">
            <li>
              <Link
                className="flex items-center gap-2"
                to="/"
                onClick={handleNavClose}
              >
                Personal{" "}
                <span>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2"
                to="/business"
                onClick={handleNavClose}
              >
                Business{" "}
                <span>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center base:w-full sm:w-[350px] gap-2 rounded-[4px] bg-[#F3F4F7] dark:border-[1px] dark:bg-slate-800 px-4 py-2 ">
            <span>
              <AiOutlineSearch />
            </span>
            <input
              className="w-full text-gray-800 dark:text-gray-200  bg-transparent border-none  p-0 outline-none"
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
