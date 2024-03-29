/* eslint-disable react/prop-types */
import "./Button.css";
const PrimaryButton = (props) => {
  return (
    <div className="button primary-btn ">
      <a href="/#"> {props.children} </a>
    </div>
  );
};
const SecondaryButton = (props) => {
  return (
    <div className="button secondary-btn ">
      <a href="/#"> {props.children} </a>
    </div>
  );
};

export default PrimaryButton;
export { SecondaryButton };
