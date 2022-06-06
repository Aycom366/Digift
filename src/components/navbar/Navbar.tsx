import digiftLogo from "~/assets/images/difgitLogo.png";

//icons
import { FaBars } from "react-icons/fa";

//utils
import { useGlobalContext } from "~/store/Context";
import { useNavigate } from "react-router-dom";

//components
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Navbar = () => {
  const { isNavOpen, setIsNavOpen } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <nav className="bg-white dark:bg-slate-800 text-[#8A91A8] shadow-custom ">
      <div className="flex relative flex-col lg:flex-row w-full  px-4 py-4 max-w-[1400px]  mx-auto justify-between items-center">
        <div className="w-full  flex justify-between items-center">
          <div
            role="link"
            onClick={() => navigate("/")}
            className="w-[100px] h-[50px]"
          >
            <img
              className="img object-contain"
              src={digiftLogo}
              alt="DifIft Logo"
            />
          </div>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="sm:flex lg:hidden "
          >
            <FaBars className="w-[30px] h-[30px]" />
          </button>
        </div>

        {/* mobile nav */}
        <Mobile />

        {/* desktop contain */}
        <Desktop />
      </div>
    </nav>
  );
};

export default Navbar;
