import { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [stepTwo, setStepTwo] = useState(0);
  return (
    <div className="container">
      {stepTwo === 0 ? (
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          errorPassword={errorPassword}
          setErrorPassword={setErrorPassword}
          setStepTwo={setStepTwo}
        />
      ) : (
        <StepTwo
          name={name}
          email={email}
          password={password}
          setStepTwo={setStepTwo}
        />
      )}
    </div>
  );
}

export default App;
