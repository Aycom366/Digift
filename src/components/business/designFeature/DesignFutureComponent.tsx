import business from "~/assets/images/business/business.png";

interface IProps {
  children: React.ReactNode;
  info: string;
}

const DesignFutureComponent = ({ children, info }: IProps) => {
  return (
    <article className="w-full rounded-2xl flex-[1_0_20em] relative h-[450px] sm:h-[600px] p-8 md:p-10 lg:p-16 bg-[#C2DDFF] ">
      <div className="flex flex-col gap-6 max-w-[400px]">
        {children}
        <p className="font-semibold text-[14px] tracking-[-2%] #000429 leading-6 ">
          {info}
        </p>
      </div>
      <img
        className="content-none absolute bottom-0 -right-3"
        src={business}
        alt="Just Image"
      />
    </article>
  );
};

export default DesignFutureComponent;
