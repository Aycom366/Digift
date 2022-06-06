import DesignFutureComponent from "./DesignFutureComponent";

const DesignFuture = () => {
  return (
    <section className="max-w-[1400px] gap-8 mx-auto w-full flex  flex-wrap  sm:px-4 my-[50px]">
      <DesignFutureComponent info="We give merchants the ability to sell digital Gift Cards for their business quickly, intuitively and affordably.">
        <h2 className="font-bold text-4xl sm:text-5xl leading-[40px]  sm:leading-[58px]">
          Designed for today’s <span className="text-[#0069E0]">ambitious</span>{" "}
          businesses.
        </h2>
      </DesignFutureComponent>
      <DesignFutureComponent
        info="Automate your sales and marketing
          so you can focus on other areas of your business."
      >
        <h2 className="font-bold text-4xl sm:text-5xl leading-[40px]  sm:leading-[58px]">
          Features that <span className="text-[#0069E0]">empower</span> your
          business
        </h2>
      </DesignFutureComponent>
    </section>
  );
};

export default DesignFuture;
