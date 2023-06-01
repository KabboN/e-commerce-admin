import React, { useState } from 'react';


const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new user object
    const newUser = {
      name,
      email,
      password,
    };

    // Read the existing data from register.json
    const registerData = fs.readFileSync('register.json', 'utf8');
    let users = [];
    if (registerData) {
      users = JSON.parse(registerData);
    }

    // Add the new user to the array
    users.push(newUser);

    // Write the updated data back to register.json
    fs.writeFileSync('register.json', JSON.stringify(users), 'utf8');

    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterView;
