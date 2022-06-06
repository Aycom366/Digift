import snake from "~/assets/images/snake.png";
const CreateHappiness = () => {
  return (
    <section className="w-full  my-[50px] px-4">
      <div className="w-full overflow-hidden max-w-[1400px] mx-auto bg-no-repeat bg-cover px-4 sm:px-[120px] h-[300px] sm:h-[480px] rounded-3xl bg-happiness_image flex items-center shadow-[0px_6px_0px_#5CA5FF] sm:shadow-[0px_12px_0px_#5CA5FF] relative after:landing_mesh ">
        <h1 className="font-bold z-10 text-[2rem]  sm:text-6xl max-w-[654px] text-white leading-normal sm:leading-[78px]">
          Create happiness from buying a gift card today.
          <img className="hidden sm:inline ml-4" src={snake} alt="Vector" />
        </h1>
      </div>
    </section>
  );
};

export default CreateHappiness;
