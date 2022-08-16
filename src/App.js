import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import DisplayEmployee from './components/DisplayEmployee';

const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
    title: 'M'
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    // Envoyer la demande
    axios
      .get('https://randomuser.me/api?nat=en')
      // Extraire les DONNÉES de la réponse reçue
      .then((response) => response.data)
      // Utilisez ces données pour mettre à jour l'état
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };

  return (
    <div className="App">
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App;
