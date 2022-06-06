import sun from "~/assets/images/sun.png";
import moon from "~/assets/images/moon.png";
import { useState } from "react";

export const ThemeToggler = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="flex justify-end cursor-pointer  transition-all ease-in-out duration-1000"
    >
      <div className="flex relative items-center justify-between max-w-[100px] w-full p-1 overflow-hidden  bg-[#F3F4F7] h-[42px] rounded-[999px]">
        <div
          className={`rounded-[999px] w-[40px]  absolute bg-white h-[40px] z-0 ${
            toggle ? "left-[5px]" : "right-[5px]"
          } `}
        ></div>
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
