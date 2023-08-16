import PropTypes from "prop-types";
import "../scss/Button.scss";

const Button = ({text, onClick, buttonType}) => {
  return(
    <>
      <button
        className={`btn btn-${buttonType ? buttonType : 'primary'}`}
        onClick={onClick}
        data-testid="button"
      >{text ? text : 'ButtonText'}</button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  buttonType: PropTypes.string
};

export default Button;