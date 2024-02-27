import "./Home.css";

import Hero from "../../sections/header/hero/Hero";
import MostPopular from "../../sections/mostPopular/MostPopular";
import Team from "../../sections/Team/Team";
const Home = () => {
  return (
    <div>
      <Hero />
      <MostPopular />
      <Team />
    </div>
  );
};

export default Home;
