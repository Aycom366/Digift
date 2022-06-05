import rightAmazon from "~/assets/images/amazon_landing.png";
import leftCard from "~/assets/images/card_landing.png";
import leftSnake from "~/assets/images/left_snake.png";
import rightSnake from "~/assets/images/snake.png";

const Banner = () => {
  return (
    <section className="w-full my-[50px] sm:px-4">
      <section className="max-w-[1400px] mx-auto w-full h-[600px] bg-[#0069E0] bg-landing-mesh sm:rounded-[32px] px-4 py-[50px] flex items-center justify-center overflow-hidden  relative">
        <div className="content-none absolute hidden sm:flex bottom-0 md:left-[-40%] lg:left-[-10%]">
          <img loading="lazy" src={rightAmazon} alt="Amazon card" />
        </div>
        <div className="content-none absolute hidden sm:flex bottom-0 md:right-[-20%] lg:right-[0%]">
          <img loading="lazy" src={leftCard} alt="Amazon card" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[2rem] sm:text-[64px] font-bold leading-normal md:leading-[76px] max-w-[700px] mx-auto text-center text-white">
            <img
              loading="lazy"
              className="  hidden sm:inline  mr-2 sm:mr-14"
              src={leftSnake}
              alt="Vector"
            />
            Eliminate bank
            <img
              loading="lazy"
              className=" hidden sm:inline ml-14"
              src={rightSnake}
              alt="Vector"
            />
            restrictions with our unique gift cards.
          </h1>
          <p className="text-center text-[14px] py-[32px] leading-5 font-semibold text-white max-w-[323px] mx-auto">
            Shop on Amazon, ASOS, 1800 flowers, Whilst paying for utilities and
            even more.
          </p>
          <button className="bg-white rounded-[4px] shadow-[4px_4px_0px_#5CA5FF] self-center  p-[16px_35px] text-[#0069E0] font-semibold">
            Start shopping
          </button>
        </div>
      </section>
    </section>
  );
};

export default Banner;
