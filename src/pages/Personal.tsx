import CreateHappiness from "~/components/shared/CreateHappiness";
import HappyCustomer from "~/components/personal/happyCustomer/HappyCustomer";
import Arrivals from "~/components/personal/arrivals/Arrivals";
import Banner from "~/components/personal/banner/Banner";
import PageContainer from "~/components/shared/PageContainer";

const Personal = () => {
  return (
    <PageContainer>
      <Banner />
      <Arrivals />
      <HappyCustomer />
      <CreateHappiness />
    </PageContainer>
  );
};

export default Personal;
