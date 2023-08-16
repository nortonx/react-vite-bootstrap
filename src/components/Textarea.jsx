import PropTypes from "prop-types";
import "../scss/Textarea.scss";
const Textarea = ({ label, id, onChangeText }) => {
  return(
    <div className="textarea mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <textarea 
        className="form-control" 
        id={id}
        onChange={(e) => onChangeText(e.target.value)}
        data-testid="textarea"
      ></textarea>
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  onChangeText: PropTypes.func
};

export default Textarea;