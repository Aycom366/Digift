import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import apiImage from "~/assets/images/apiImage.png";
const Api = () => {
  return (
    <section className="max-w-[1200px] gap-8 mx-auto w-full grid grid-cols-1 sm:grid-cols-2 place-items-center px-4 my-[50px]">
      <div className="w-full">
        <article className="w-full flex flex-col gap-6 max-w-[480px]">
          <h1 className=" text-[40px] md:text-[40px] lg:text-[56px] tracking-tighter text-[#000429] dark:text-slate-100 leading-[50px] md:leading-[50px] lg:leading-[67px] font-bold">
            Our API is built to be as{" "}
            <span className="text-[#0069E0]">lightweight</span> and efficient as
            possible.
          </h1>
          <h4 className="font-semibold text-[#8A91A8] text-[14px] leading-[20px]">
            We offer client and server libraries in everything from our API
          </h4>
          <div className="flex  items-center">
            <button className="justify-center px-2 rounded font-semibold text-white py-[14px] w-full gap-2 sm:w-[150px] flex items-center text-[14px] leading-[20px] bg-[#0078FF]">
              Get started{" "}
              <MdOutlineKeyboardArrowRight className="mt-[1px] motion-safe:group-hover:animate-pulse" />
            </button>
            <button className="justify-center gap-2 font-semibold text-[#8A91A8] py-[14px] w-full sm:w-[150px] flex items-center text-[14px] leading-[20px]">
              Sign in{" "}
              <MdOutlineKeyboardArrowRight className="mt-[1px] motion-safe:group-hover:animate-pulse" />
            </button>
          </div>
        </article>
      </div>
      <div className="w-full flex justify-end">
        <div className="h-[460px] rounded-lg overflow-hidden max-w-[480px]">
          <img className="img" src={apiImage} alt="Digift Api Image" />
        </div>
      </div>
    </section>
  );
};

export default Api;
