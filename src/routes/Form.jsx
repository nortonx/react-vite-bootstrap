import { useState } from "react";
import "../scss/Form.scss";
import Input from "../components/Input";
import Button from "../components/Button";
const Form = () => {
  const [email, setEmail] = useState("");
  return(
    <div className="container form" data-testid="form">
      <div className="row">
        <div className="col-md-6">
          <Input
            id="userEmail"
            label="E-mail:"
            type="email"
            value={email}
            className="mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            text="Testing button"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;