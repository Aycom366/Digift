import Api from "~/components/business/Api";
import DesignFuture from "~/components/business/designFeature/DesignFuture";
import Expand from "~/components/business/Expand";
import { WhyDoFast } from "~/components/business/WhyDoFast";

const Business = () => {
  return (
    <section
      className="flex bg-white text-slate-900  
   flex-col"
    >
      <Expand />
      <WhyDoFast />
      <DesignFuture />
      <Api />
    </section>
  );
};

export default Business;
