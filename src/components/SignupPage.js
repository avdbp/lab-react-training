import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para procesar el formulario

    // Después de procesar el formulario, resetea los valores de los campos
    setEmail('');
    setPassword('');
    setNationality('en');
  };

  const handleReset = () => {
    // Resetea los valores de los campos al estado inicial
    setEmail('');
    setPassword('');
    setNationality('en');
  };

  return (
    <div className="container">
      <h1 className="mt-5">Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className={`form-control ${/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) ? 'is-valid' : 'is-invalid'}`}
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="invalid-feedback">Please enter a valid email.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            className={`form-control ${password.length >= 8 ? 'is-valid' : 'is-invalid'}`}
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="invalid-feedback">Password must be at least 8 characters long.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="nationality" className="form-label">Nationality:</label>
          <select
            id="nationality"
            className="form-select"
            value={nationality}
            onChange={handleNationalityChange}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
          <p className="mt-2">
            {nationality === 'en'
              ? 'Hello'
              : nationality === 'de'
              ? 'Hallo'
              : 'Bonjour'}
          </p>
        </div>
        <p>Your email is: {email}</p>
        <button type="button" className="btn btn-secondary ms-2" onClick={handleReset}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
