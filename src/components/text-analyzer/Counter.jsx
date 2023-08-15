import PropTypes from "prop-types";
const Counter = ({ label, counter }) => {
  return(
    <div className="col" data-testid="counter">
      <h1 className="m-2 text-center">{label}</h1>
      <h2 className="text-center text-body-secondary">{counter}</h2>
    </div>
  );
};

Counter.propTypes = {
  label: PropTypes.string,
  counter: PropTypes.number
};

export default Counter;