import "../scss/Form.scss";
import Input from "../components/Input";
import Button from "../components/Button";
const Form = () => {
  return(
    <div className="container form" data-testid="form">
      <div className="row">
        <div className="col-md-6">
          <Input
            label="E-mail:"
            type="text"
          />
          <Button
            label="Testing button"
            
          />
        </div>
      </div>
    </div>
  )
}

export default Form;