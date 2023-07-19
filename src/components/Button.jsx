import PropTypes from "prop-types";
import "../scss/Button.scss";

const Button = ({label, onClick, buttonType}) => {
  return(
    <>
      <button
        className={`btn btn-primary btn-${buttonType}`}
        onClick={onClick}
      >{label}</button>
    </>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  buttonType: PropTypes.string
}

export default Button;