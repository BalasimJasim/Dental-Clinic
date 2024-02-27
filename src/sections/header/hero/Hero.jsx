import { NavLink } from "react-router-dom";
import PrimaryButton from "../../../components/Buttons/Button";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-image"></div>
      <div className="hero-text">
        <h2 className="hero-title">
          <em>Tough Teeth</em>
        </h2>
        <p className="hero-subtitle">Beautiful smiles with Science.</p>
        <NavLink to={"/services"}>
          <PrimaryButton>Explore Our Services </PrimaryButton>{" "}
        </NavLink>
        {/* <div className="hero-buttons">
          <a href="/services" className="button button-primary">
            Explore Our Services
          </a>
        
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
