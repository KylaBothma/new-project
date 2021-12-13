import React, { Component } from 'react';
import countries from './countries';

export default function App() {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');

  const handleSubmit = (event) => {
    console.log(`
      Name: ${name}
      Age: ${age}
    `);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Enter the following details :)</h1>

      <label>
        Enter your name:
        <input
          name="name"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Enter your age:
        <input
          name="age"
          type="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </label>

      <button>Submit</button>
    </form>
  );
}
