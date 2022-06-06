import CreateHappiness from "~/components/shared/CreateHappiness";
import HappyCustomer from "~/components/personal/happyCustomer/HappyCustomer";
import Arrivals from "~/components/personal/arrivals/Arrivals";
import Banner from "~/components/personal/banner/Banner";

// dark:bg-slate-800 dark:text-white
const Personal = () => {
  return (
    <section
      className="flex bg-white text-slate-900  
   flex-col"
    >
      <Banner />
      {/* <Arrivals /> */}
      <HappyCustomer />
      <CreateHappiness />
    </section>
  );
};

export default Personal;
