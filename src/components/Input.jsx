import PropTypes from "prop-types";
import "../scss/Input.scss";
const Input = ({label, type, value, className, onChange, readOnly, placeholder, required, id}) => {
  return(
    <>
      <div className="col-sm-6">
        <label htmlFor={id} className="form-label">{label}</label>
        <input 
          type={type} 
          value={value} 
          className={`form-control input ${className ? className : ""}`}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          onChange={onChange}
          data-testid="input"
          id={id}
        />
      </div>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string,
};

export default Input;