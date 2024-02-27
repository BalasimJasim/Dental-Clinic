import "./MostPopular.css";

import Card from "../../components/card/Card";
import SectionHeader from "../../components/section-header/SectionHeader";
import SectionWrapper from "../../components/section-wrapper/SectionWrapper";
import servicesData from "../../Data/ServiceData";

const MostPopular = () => {
  const cards = servicesData.map((service, index) => (
    <Card
      key={index}
      title={service.title}
      image={service.image}
      description={service.description}
    />
  ));

  return (
    <SectionWrapper>
      <SectionHeader> Services</SectionHeader>
      {cards}
    </SectionWrapper>
  );
};

export default MostPopular;
