import sun from "~/assets/images/sun.png";
import moon from "~/assets/images/moon.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ThemeToggler = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [toggle]);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="flex justify-end cursor-pointer  transition-all ease-in-out duration-1000"
    >
      <div className="flex relative items-center justify-between max-w-[100px] w-full p-1 overflow-hidden  bg-[#F3F4F7] dark:bg-slate-500 h-[42px] rounded-[999px]">
        <motion.div
          layout
          transition={spring}
          className={`rounded-[999px] w-[40px]  absolute bg-white  dark:bg-slate-800 h-[40px] z-0 ${
            toggle ? "left-[5px]" : "right-[5px]"
          } `}
        ></motion.div>
        <div className="z-10 grid place-content-center w-[40px] h-full">
          <img src={sun} alt="sun" />
        </div>
        <div className="z-10 grid place-content-center w-[40px] h-full">
          <img src={moon} alt="moon" />
        </div>
      </div>
    </div>
  );
};
