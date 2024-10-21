import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Person() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameInput(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameInput(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <label htmlFor="first-name">First Name: </label>
      <input type="text" id="first-name" onChange={handleFirstNameInput}/>
      <label htmlFor="last-name">Last Name: </label>
      <input type="text" id="last-name" onChange={handleLastNameInput}/>
      <h1>{firstName + ' ' + lastName}</h1>
    </>
  );
}

function App() {

  return (
    <div>
      <Person />
    </div>
  );
}

export default App;
