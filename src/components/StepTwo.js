const stepTwo = ({ name, email, password, setStepTwo }) => {
  return (
    <>
      <div className="stepTwo">
        <h2>Results</h2>
        <div className="content">
          <p>
            <span>Name: </span> {name}
          </p>
          <p>
            <span>Email: </span> {email}
          </p>
          <p>
            <span>Password: </span> {password}
          </p>
        </div>
        <button id="edit" onClick={() => setStepTwo(0)}>
          Edit your information
        </button>
      </div>
    </>
  );
};

export default stepTwo;
