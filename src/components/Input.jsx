import PropTypes from "prop-types";
import "../scss/Input.scss";
const Input = ({label, type, value, onChange, readOnly, placeholder, required}) => {
  return(
    <>
      <div className="col-sm-6">
        <label htmlFor="" className="form-label">{label}</label>
        <input 
          type={type} 
          value={value} 
          className="form-control input" 
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          onChange={onChange}
          data-testid="input"
        />
      </div>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;