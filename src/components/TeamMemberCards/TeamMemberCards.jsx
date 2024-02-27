/* eslint-disable react/prop-types */
import "./TeamMemberCards.css";
const TeamMemberCards = (props) => {
  return (
    <div className="team-member-card">
      <ul>
        <li>
          <img src={props.image} />
        </li>
        <li>
          <h4>{props.name}</h4>
        </li>
        <li>{props.profession}</li>
        <li>Years of Experience: {props.yearsOfExperience}</li>
      </ul>
    </div>
  );
};

export default TeamMemberCards;
