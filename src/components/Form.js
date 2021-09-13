const Form = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  errorPassword,
  setErrorPassword,
  setStepTwo,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorPassword("Vos deux mots de passe ne sont identiques");
    } else {
      console.log(
        `Name: ${name}, Email: ${email}, Password: ${password}, confirmationPassword: ${confirmPassword}`
      );
      setStepTwo(1);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create account</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Nom Prénom"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="jeandupont@lereacteur.io"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          className={errorPassword && "errorInput"}
          placeholder="lErEaCtEuR2020"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password_confirm">Confirm your password</label>
        <input
          type="password"
          id="password_confirm"
          name="password_confirm"
          value={confirmPassword}
          className={errorPassword && "errorInput"}
          placeholder="lErEaCtEuR2020"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {errorPassword && <p className="invalid-feedback">{errorPassword}</p>}
      <div className="form-group">
        <input type="submit" value="Register" />
      </div>
    </form>
  );
};

export default Form;
