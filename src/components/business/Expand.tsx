import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import dashboard from "~/assets/images/businessBannerImage.png";
import businessStar from "~/assets/images/business/wide.png";

const Expand = () => {
  return (
    <section className="max-w-[1200px]   gap-8 mx-auto w-full grid grid-cols-1 sm:grid-cols-2 place-items-center px-4 my-[100px] mt-[120px]">
      <div className="w-full">
        <article className="w-full flex flex-col gap-6 max-w-[500px]">
          <h1 className="text-[40px] md:text-[40px] lg:text-[56px] tracking-tighter text-[#000429] dark:text-slate-100 leading-[50px] md:leading-[50px] lg:leading-[67px] font-bold">
            Expand the giftcard industy,{" "}
            <span className="text-[#0069E0]">one card</span> at a time!{" "}
            <img className="inline" src={businessStar} alt="Star Image" />
          </h1>
          <h4 className="font-semibold text-[#8A91A8] text-[14px] leading-[20px]">
            Digift helps businesses connect with customers by letting them offer
            their business gift cards to a large number of people.
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
        <div className="h-[460px] rounded-lg overflow-hidden">
          <img
            className="img"
            src={dashboard}
            alt="Digift Dashboard Image Screenshot"
          />
        </div>
      </div>
    </section>
  );
};

export default Expand;
