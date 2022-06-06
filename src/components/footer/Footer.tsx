import { Link } from "react-router-dom";

//footer links item
import { FooterLinks, FooterLogo } from "./data/data";

import digiftLogo from "~/assets/images/difgitLogo.png";
import arrow from "~/assets/images/arrow.png";

//icons
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className=" bg-white dark:bg-slate-800 pt-[50px] w-full ">
      <div className="w-full flex flex-col max-w-[1400px] mx-auto px-4 ">
        <section className="w-full h-full  text-[14px] py-16 border-y-[1px] dark:border-slate-500  base:grid-cols-1 md:grid-cols-responsive max-w-[1024px] mx-auto gap-12  border-x-slate-400-50 grid">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 w-full gap-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-[100px]">
                  <img
                    loading="lazy"
                    className="img"
                    src={digiftLogo}
                    alt="DigIft logo"
                  />
                </div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Creating Happiness One Giftcard at a Time.
                </p>
              </div>
              <ul className="flex items-center gap-4">
                {FooterLogo.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.url}>
                        <img loading="lazy" src={item.source} alt={item.alt} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Contact us
                </h3>
                <a
                  className="text-[#8A91A8]  dark:text-slate-400"
                  href="mailto:hello@digiftng.com"
                >
                  hello@digiftng.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Office
                </h3>
                <p className="text-[#8A91A8] text-[14px]">
                  226, Awolowo road, Ikoyi, Lagos State, Nigeria
                </p>
              </div>
              <div className="text-[#8A91A8] flex items-center gap-4 ">
                <Link className="flex items-center" to="#">
                  Our privacy policy <BsArrowRightShort />
                </Link>
                <Link className="flex items-center" to="#">
                  Terms and Condition <BsArrowRightShort />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full   grid grid-cols-3 gap-8">
            {FooterLinks.map((links, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <h1 className="font-semibold text-[14px] text-slate-900 dark:text-white">
                  {links.title}
                </h1>
                <ul className=" flex flex-col gap-6">
                  {links.links.map((link, index) => (
                    <li className="text-[14px] leading-[24px]" key={index}>
                      <Link className="text-[#8A91A8]" to={link.url}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="flex text-[#8A91A8] py-16 gap-8 flex-col">
          <div className="flex h-full gap-4">
            <div
              onClick={handleScrollToTop}
              className="w-[400px] motion-safe:animate-bounce hover:animate-none cursor-pointer sm:w-[200px] h-[50px] grid place-content-center bg-footer-bg bg-contain bg-no-repeat bg-center"
            >
              <img loading="lazy" src={arrow} alt="Arrow Up" />
            </div>
            <p className="text-[14px]">
              The website www.digiftng.com is owned and operated by Blinksky
              Nigeria Limited, a company duly registered under the Laws of the
              Federal Republic of Nigeria with RC Number: 1656204. Trademark to
              all logos of Giftcards are owned by their respective brands and
              Blinksky Nigeria Limited doesn’t claim ownership of these
              trademarks. All Giftcards dominated in USD are provided in
              conjunction with BlinkSky Inc. Users must have valid US account
              and in some cases a valid US address before purchasing.
            </p>
          </div>
          <p className="text-[14px]">
            Copyright © {new Date().getFullYear()} Blinksky Nigeria Limited
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
