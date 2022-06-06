import whiteVector from "~/assets/images/business/whiteStar.png";
import save from "~/assets/images/business/save.png";

export const WhyDoFast = () => {
  return (
    <section className="w-full py-[50px] sm:px-4">
      <section className="max-w-[1400px] mx-auto w-full h-[680px] bg-[#0069E0] bg-landing-mesh sm:rounded-[32px] px-4 py-[50px] flex  items-center justify-center overflow-hidden">
        <div className="max-w-[612px] gap-8 mx-auto w-full flex flex-col items-center">
          <p className="text-center text-white flex gap-2 font-semibold tracking-[-2%] items-center">
            <img className="inline" src={whiteVector} alt="White Star Image" />
            Digift helps businesses
          </p>
          <h2 className="  text-[48px] sm:text-[64px] leading-[50px]  sm:leading-[76px] -tracking-wider text-white font-bold text-center">
            Why do fast-growing merchant and vendor{" "}
            <img className="inline" src={save} alt="Embedded Image" />
          </h2>
          <p className="text-[14px] font-semibold text-white text-center">
            Whether you’re a business looking to sell your own gift cards, a
            company looking for bulk gift card solution, digift is for you.
          </p>
          <button className="leading-[20px] border-b-2 border-white text-[14px] text-white tracking-tighter">
            Create an account today
          </button>
        </div>
      </section>
    </section>
  );
};
