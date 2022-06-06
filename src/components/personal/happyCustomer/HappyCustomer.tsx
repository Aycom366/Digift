import { happyCustomerData } from "~/components/personal/happyCustomer/data";

const HappyCustomer = () => {
  return (
    <section className="max-w-[1400px] mx-auto flex flex-col gap-6 md:gap-16 px-4 my-[50px]">
      <h2 className="font-bold text-[2rem] md:text-[65px] leading-normal md:leading-[72px] text-center w-full max-w-[900px] mx-auto">
        <q>Hear what happy customers are saying about Digift</q>
      </h2>
      <div className="flex flex-wrap w-full gap-8 ">
        {happyCustomerData.map((customer) => (
          <article
            key={customer.id}
            className="rounded-[8px] h-[410] flex flex-col flex-[1_0_20em] gap-20 justify-between border-2 dark:border-slate-500 py-7 px-10"
          >
            <q className="text-[#8A91A8] leading-8">{customer.info}</q>
            <div className="flex items-center mt-auto gap-4">
              <img loading="lazy" src={customer.avatar} alt="Avatar's Name" />
              <div className="flex flex-col h-full justify-between">
                <h4 className="font-bold text-base">{customer.name}</h4>
                <p className="text-[14px] text-[#68718D]">
                  {customer.occupation}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HappyCustomer;
