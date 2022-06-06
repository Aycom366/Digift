import Api from "~/components/business/Api";
import DesignFuture from "~/components/business/designFeature/DesignFuture";
import Expand from "~/components/business/Expand";
import { WhyDoFast } from "~/components/business/WhyDoFast";
import PageContainer from "~/components/shared/PageContainer";

const Business = () => {
  return (
    <PageContainer>
      <Expand />
      <WhyDoFast />
      <DesignFuture />
      <Api />
    </PageContainer>
  );
};

export default Business;
