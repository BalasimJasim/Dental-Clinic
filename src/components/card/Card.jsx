/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { SecondaryButton } from "../Buttons/Button";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="service-item">
      <div className="service-card-wrapper">
        <img
          className="service-item-image"
          src={props.image}
          alt={props.title}
        />
        <div className="service-item-content">
          <h4 className="service-item-title">{props.title}</h4>
          <p className="service-item-description">{props.description}</p>
          <NavLink to="/book-appointment">
            <SecondaryButton> Book Now</SecondaryButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
