import teamData from "../../Data/TeamData";
import TeamMemberCards from "../../components/TeamMemberCards/TeamMemberCards";
// import Card from "../../components/card/Card";
import SectionHeader from "../../components/section-header/SectionHeader";
import SectionWrapper from "../../components/section-wrapper/SectionWrapper";
import "./Team.css";
const Team = () => {
  const members = teamData.map((member, index) => (
    <TeamMemberCards
      key={index}
      name={member.name}
      image={member.image}
      profession={member.profession}
      yearsOfExperience={member.yearsOfExperience}
    />
  ));

  return (
    <div>
      <SectionWrapper>
        <SectionHeader> Our Team</SectionHeader>
        <div className="team-member-cards">{members}</div>
      </SectionWrapper>
    </div>
  );
};

export default Team;
